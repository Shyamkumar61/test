import React from "react";

const TimeAndAttendance = () => {
  const attendanceData = {
    employeeAttendance: [
      { date: "2023-05-01", attendance: 8 },
      { date: "2023-05-02", attendance: 7 },
      { date: "2023-05-03", attendance: 9 },
      // ... more attendance records
    ],
    totalWorkHours: 24,
    overtimeHours: 4,
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 overflow-x-auto">
      <h3 className="text-2xl font-bold mb-4">Time and Attendance</h3>
      <div className="flex flex-col gap-4">
        <div className="bg-gradient-to-r from-blue-200 to-blue-400 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Attendance Records</h4>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Attendance</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.employeeAttendance.map((record) => (
                <tr key={record.date}>
                  <td className="py-2 px-4 border-b">{record.date}</td>
                  <td className="py-2 px-4 border-b">{record.attendance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gradient-to-r from-blue-300 to-blue-400 bg-gray-100 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Attendance</h4>
          <p className="text-3xl font-bold">{attendanceData.totalWorkHours} Days</p>
          <p className="text-sm text-gray-500 mt-2">Overtime: {attendanceData.overtimeHours}</p>
        </div>
        <div className="col-span-2 bg-gray-100 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">Time-Off Requests</h4>
        </div>
      </div>
    </div>
  );
};

export default TimeAndAttendance;
