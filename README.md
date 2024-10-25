# Ride-Sharing Platform

This project is a full-fledged ride-sharing platform built with three distinct user roles: **Traveler**, **Traveler Companion**, and **Admin**. Each role comes with specific features and responsibilities to ensure a seamless and secure ride-sharing experience.

## Features

### Traveler
1. **Ride Sharing**: Travelers can share ride details such as Trip ID, Driver Name, Driver Phone Number, and Cab Number via WhatsApp or SMS while the trip is in progress. The link expires automatically once the trip is complete.
2. **Audit Trail**: Travelers can review the audit trail of the rides they have shared.

### Traveler Companion
1. **Ride Tracking**: Track the real-time location of the traveler during the ride.
2. **Notifications**: 
   - Receive notifications when the trip is complete.
   - Get notified when the cab enters a geofenced area near the traveler’s drop-off location.
3. **Feedback**: Share feedback about the ride experience, which is then submitted to the admin.

### Admin
1. **View Rides**: Admins have access to view all rides shared by travelers.
2. **Feedback Management**: Admins can review the feedback shared by users.

## Key Constraints
1. **Authentication**: The platform uses robust authentication mechanisms to ensure account security.
2. **Scalability**: Scalable strategies are employed to accommodate an expanding user base as the platform grows.

## Tech Stack

- **Frontend**: React.js, CSS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL for handling user data, ride information, and audit trails.
- **WebSocket**: For real-time ride tracking and notifications.
- **Map**: Leaflet.js for real-time map tracking of the traveler.
- 

API Endpoints
Here are some of the key API endpoints for the platform:

1.POST /api/signup: Sign up a new user (traveler, companion, or admin).
2.POST /api/login: Authenticate users and return a JWT token.
3.GET /api/rides/
4.: Get ride details by trip ID.
5.POST /api/rides/share: Share ride details via SMS or WhatsApp.
6.GET /api/feedback: Fetch user feedback for admin.


Demonstration
Traveler: Share ride details, track rides, and review shared rides through the audit trail.
Traveler Companion: Track the traveler's location in real time, receive notifications, and share feedback with the admin.
Admin: View all shared rides and review feedback from users.


Future Improvements
Implement more detailed ride analytics for the admin.
Introduce rating systems for both travelers and drivers.
Add support for multiple languages.

