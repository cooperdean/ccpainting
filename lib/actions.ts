"use server"

export async function sendEmail(data: {
  to: string
  subject: string
  body: string
}) {
  try {
    // In a production environment, you would use a service like Nodemailer, SendGrid, etc.
    // to send the email to the specified recipient

    // For now, we'll just log the data
    console.log("Sending email:", data)

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
