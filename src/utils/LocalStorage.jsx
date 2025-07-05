import { useEffect } from "react";

const employees = {
    "employees": [
      {
        "id": 1,
        "email": "e@e.com",
        "password": "123",
        "firstname": "Aarav",
        "tasks": [
          {
            "title": "Prepare Monthly Report",
            "description": "Compile and submit the financial report for this month.",
            "date": "2024-12-10",
            "category": "Finance",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Team Meeting",
            "description": "Attend the weekly team meeting to discuss progress.",
            "date": "2024-12-06",
            "category": "Meetings",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Client Follow-up",
            "description": "Contact the client regarding project updates.",
            "date": "2024-12-07",
            "category": "Communication",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ],
        "taskSummary": {
          "active": 2,
          "newTask": 0,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "firstname": "Isha",
        "tasks": [
          {
            "title": "Inventory Check",
            "description": "Verify and update inventory levels.",
            "date": "2024-12-08",
            "category": "Logistics",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Training Session",
            "description": "Conduct a training session on the new software.",
            "date": "2024-12-09",
            "category": "Training",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "System Update",
            "description": "Schedule and perform system maintenance.",
            "date": "2024-12-11",
            "category": "IT",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ],
        "taskSummary": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "firstname": "Vivaan",
        "tasks": [
          {
            "title": "Market Analysis",
            "description": "Analyze the market trends for the last quarter.",
            "date": "2024-12-07",
            "category": "Research",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Social Media Campaign",
            "description": "Design and launch a new social media campaign.",
            "date": "2024-12-12",
            "category": "Marketing",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "title": "Policy Review",
            "description": "Review and update company policies.",
            "date": "2024-12-13",
            "category": "HR",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          }
        ],
        "taskSummary": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "firstname": "Ananya",
        "tasks": [
          {
            "title": "Website Update",
            "description": "Update the homepage with the latest announcements.",
            "date": "2024-12-06",
            "category": "Web Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Bug Fixes",
            "description": "Resolve bugs reported by the QA team.",
            "date": "2024-12-07",
            "category": "IT",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Code Review",
            "description": "Review code submitted by the development team.",
            "date": "2024-12-08",
            "category": "IT",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ],
        "taskSummary": {
          "active": 2,
          "newTask": 0,
          "completed": 1,
          "failed": 0
        }
      },
      {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "firstname": "Rohan",
        "tasks": [
          {
            "title": "Vendor Meeting",
            "description": "Meet with vendors to negotiate contracts.",
            "date": "2024-12-09",
            "category": "Procurement",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "title": "Report Submission",
            "description": "Submit the quarterly report to the board.",
            "date": "2024-12-10",
            "category": "Finance",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "title": "Project Plan",
            "description": "Prepare the project plan for the next quarter.",
            "date": "2024-12-11",
            "category": "Planning",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ],
        "taskSummary": {
          "active": 2,
          "newTask": 0,
          "completed": 1,
          "failed": 0
        }
      }
    ]
  };
  
  
  const admin = {
    "admin": {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  };
  
  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }


  export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));
    return {employees,admin}

  }
  
  