import mongoose from 'mongoose'

const connectDB = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useUnifiedTopology: true
    })
    .then(data => {
      console.log(`Mongodb connected with server ${data.connection.host}`)
    })
}

export default connectDB
