type User = {
    firstName: string,
    lastName: string,
    email?: string,
    phone?: string,
    dob?: string,
    role: string,
    department?: string;
    registrationDate?: string;
    membershipId?: string; // Foreign key
}

type Membership = {
    membershipId: string
    userId: string
    membershipTypeId: string
    startDate: string
    endDate: string
}

type Trainer = {
    trainerId: string;
    fullName: string;
    email?: string;
    phoneNumber?: string;
    specialization?: string;
    certifications?: string
}

type Class = {
    classId: string;
    name: string;
    description: string;
    capacity: string;
    duration: string;
    startTime: string;
    endTime: string;
}

type Schedule = {
    scheduleId: string;
    classId: string; // (Foreign Key -> Class)
    trainerId: string; // (Foreign Key -> Trainer)
    date: string;
    startTime: string;
    endTime: string;
}

type UserAttendance = {
    attendanceId: string; // (Primary Key)
    userId: string; // (Foreign Key -> User)
    scheduleId: string; // (Foreign Key -> ClassSchedule)
    attendanceDate: string;
    attended: Boolean;
}

type Payment = {
    paymentId: string; // (Primary Key)
    userId: string; // (Foreign Key -> User)
    amount: string;
    paymentDate: string;
    paymentMethod: string;
}

type Invoice = {
    invoiceId: string; // (Primary Key)
    userId: string; // (Foreign Key -> User)
    invoiceDate: string;
    amount: string;
    status: string; // enum(Paid, Unpaid, Partial)
}
