const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
  company: {
    type: String,
    trim: true,
    required: [false, 'Please enter company name'],
  },
  description: {
    type: String,
    trim: true,
    required: [false, ' Please enter job description'],
  },
  location: {
    type: String,
    trim: true,
    required: [true, ' Please enter location'],
  },
  logo: {
    type: Buffer,
    required: false,
  },
})
