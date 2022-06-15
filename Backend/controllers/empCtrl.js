const Emp = require("../models/empModel")

class APIfeatures
{
    constructor(query, queryString)
    {
        this.query = query;
        this.queryString = queryString;
    }
    filtering()
    {
        const queryObj = { ...this.queryString } //queryString = req.query

        const excludedFields = ['page', 'sort', 'limit']
        excludedFields.forEach(el => delete (queryObj[el]))

        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

        //    gte = greater than or equal
        //    lte = lesser than or equal
        //    lt = lesser than
        //    gt = greater than
        this.query.find(JSON.parse(queryStr))

        return this;
    }

    sorting()
    {
        if (this.queryString.sort)
        {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        } else
        {
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }
}

const empCtrl = {




    addEmp: async (req, res) =>
    {
        try
        {
            const { name, code } = req.body
            const emp = await Emp.findOne({ code })
            if (emp) return res.status(400).json({ msg: "the employe already exist" })
            const newEmp = new Emp({
                name, code
            })
            //save mongoDB
            await newEmp.save()
            res.json({ newEmp })
            //  res.json({ msg: "Register Success!!" })

        } catch (err)
        {
            return res.status(500).json({ msg: err.message })
        }
    },
    getEmp: async (req, res) =>
    {

        try
        {
            const features = new APIfeatures(Emp.find(), req.query)
                .filtering().sorting()

            const employee = await features.query

            res.json({
                status: 'success',
                result: employee.length,
                employee: employee
            })

        } catch (err)
        {
            return res.status(500).json({ msg: err.message })
        }
    },
}





module.exports = empCtrl
