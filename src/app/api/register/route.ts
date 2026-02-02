import { NextRequest, NextResponse } from "next/server";

// Types for registration
interface RegistrationData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  collegeId: string;
  year: string;
  participationType: "solo" | "team";
  teamName?: string;
  teamSize?: string;
  teamMembers?: string;
  skills: string[];
  experience: string;
  github?: string;
  portfolio?: string;
  problemTrack: string;
}

// In production, replace with actual database connection
// import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  try {
    const body: RegistrationData = await request.json();

    // Validate required fields
    if (!body.fullName || !body.email || !body.phone || !body.college) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // In production:
    // 1. Check if email already registered
    // 2. Save to database
    // 3. Generate unique registration ID
    
    // Simulated response
    const registrationId = `INNO-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

    // TODO: In production, implement actual database storage
    // const registration = await db.registrations.create({
    //   data: {
    //     ...body,
    //     registrationId,
    //     status: "pending_payment",
    //     createdAt: new Date(),
    //   },
    // });

    console.log("Registration received:", { registrationId, ...body });

    return NextResponse.json({
      success: true,
      registrationId,
      message: "Registration initiated. Proceed to payment.",
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    // In production, fetch from database
    // const stats = await db.registrations.aggregate({
    //   _count: true,
    //   where: { status: "confirmed" }
    // });

    // Simulated stats
    const stats = {
      totalRegistrations: 187,
      maxCapacity: 300,
      soloParticipants: 42,
      teams: 145,
    };

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Error fetching registration stats:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
