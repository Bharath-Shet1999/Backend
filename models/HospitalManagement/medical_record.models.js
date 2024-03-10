import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema(
    {
        patientDetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patient",
        },
        patientDiognisedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor",
        }
    },
    {
        timestamps: true
    }
)

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)