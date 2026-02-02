import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Razorpay configuration
// In production, store these in environment variables
const RAZORPAY_KEY_ID = process.env.RAZORPAY_KEY_ID || "your_razorpay_key_id";
const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET || "your_razorpay_key_secret";

interface CreateOrderRequest {
  amount: number;
  registrationId: string;
  email: string;
  participationType: "solo" | "team";
  teamName?: string;
}

interface VerifyPaymentRequest {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  registrationId: string;
}

// Create Razorpay order
export async function POST(request: NextRequest) {
  try {
    const body: CreateOrderRequest = await request.json();
    const { amount, registrationId, email } = body;

    // Validate input
    if (!amount || !registrationId || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // In production, create actual Razorpay order:
    // const Razorpay = require('razorpay');
    // const razorpay = new Razorpay({
    //   key_id: RAZORPAY_KEY_ID,
    //   key_secret: RAZORPAY_KEY_SECRET,
    // });
    //
    // const order = await razorpay.orders.create({
    //   amount: amount * 100, // Amount in paise
    //   currency: "INR",
    //   receipt: registrationId,
    //   notes: {
    //     registration_id: registrationId,
    //     email: email,
    //     team_name: teamName || "Solo",
    //     participation_type: participationType,
    //   },
    // });

    // Simulated Razorpay order response
    const order = {
      id: `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      amount: amount * 100, // Amount in paise
      currency: "INR",
      receipt: registrationId,
      status: "created",
    };

    console.log("Payment order created:", order);

    return NextResponse.json({
      success: true,
      order: {
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        key: RAZORPAY_KEY_ID,
      },
    });
  } catch (error) {
    console.error("Error creating payment order:", error);
    return NextResponse.json(
      { error: "Failed to create payment order" },
      { status: 500 }
    );
  }
}

// Verify payment signature
export async function PUT(request: NextRequest) {
  try {
    const body: VerifyPaymentRequest = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      registrationId,
    } = body;

    // Validate input
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing payment details" },
        { status: 400 }
      );
    }

    // Verify signature
    const body_data = razorpay_order_id + "|" + razorpay_payment_id;
    const expected_signature = crypto
      .createHmac("sha256", RAZORPAY_KEY_SECRET)
      .update(body_data)
      .digest("hex");

    const isValid = expected_signature === razorpay_signature;

    if (!isValid) {
      console.error("Invalid payment signature");
      return NextResponse.json(
        { error: "Invalid payment signature" },
        { status: 400 }
      );
    }

    // In production:
    // 1. Update registration status in database
    // 2. Send confirmation email
    // 3. Generate receipt
    
    // await db.registrations.update({
    //   where: { registrationId },
    //   data: {
    //     status: "confirmed",
    //     paymentId: razorpay_payment_id,
    //     orderId: razorpay_order_id,
    //     paidAt: new Date(),
    //   },
    // });

    // await sendConfirmationEmail(registrationId);

    console.log("Payment verified successfully:", {
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
      registrationId,
    });

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}
