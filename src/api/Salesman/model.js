import mongoose, { Schema } from 'mongoose'

const salesmanSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Date: {
    type: Date,
    required: true
  },
  Sales: {
    type: Number,
    required: true
  },
  Location: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

salesmanSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      Name: this.Name,
      Date: this.Date,
      Sales: this.Sales,
      Location: this.Location,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Salesman', salesmanSchema)

export const schema = model.schema
export default model
