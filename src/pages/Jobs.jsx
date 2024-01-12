import React from 'react'
import Card from '../components/Card'

const jobs = [
	{
	    "_id": "655e30864105360008123813",
	    "customerId": "dac941eb-1544-44ed-943d-25ba9c07120d",
	    "jobTitle": "GI වැඩ දන්නා අය ඉක්මනින් අවශ්‍යයි 0766846999",
	    "country": "LK",
	    "date": "2023-12-22T23:59:00.000Z",
	    "jobDescription": "GI වැඩ දන්නා අය ඉක්මනින් අවශ්‍යයි 0766846999",
	    "createdAt": "2023-11-22T16:47:02.199Z",
	    "state": "new",
	    "isUrgent": true,
	    "price": "0766846999",
	    "address": "Colombo",
	    "profilePic": "../public/img/person.png",
	    "customerName": "Shamith ",
	    "category": "Electricians",
	    "commentCount": 1
	},
	{
	    "_id": "655a083c1e98d400083f352d",
	    "customerId": "1ac56446-fb9b-441a-8ec0-17832266ab7c",
	    "jobTitle": "Need to be an Electrician",
	    "country": "LK",
	    "date": "2023-12-19T23:59:00.000Z",
	    "jobDescription": "Call me 0760948700 ",
	    "createdAt": "2023-11-19T13:06:04.981Z",
	    "state": "new",
	    "isUrgent": true,
	    "price": "10000",
	    "address": "Kegalle",
	    "profilePic": "../public/img/person.png",
	    "customerName": "Electrical services...",
	    "category": "Electricians",
	    "commentCount": 2,
	    "bidCount": 1
	},
	{
	    "_id": "650b30d4d3c15a0008940748",
	    "customerId": "9af4d9dc-a418-475d-9a0b-024ba9f36ce2",
	    "jobTitle": "විදුලි කර්මික ඇබෑර්තු ඇත ",
	    "country": "LK",
	    "date": "2023-10-20T23:59:00.000Z",
	    "jobDescription": "පුහුණු නුපුණු ඔබට දැම්ම ඇමතන්න 0740187803 - 0725580235",
	    "createdAt": "2023-09-20T17:50:12.171Z",
	    "state": "accepted",
	    "isUrgent": false,
	    "price": "75000",
	    "address": "Colombo",
	    "profilePic": "../public/img/person.png",
	    "customerName": "Harshana Madushan",
	    "category": "Electricians",
	    "bidCount": 1
	},
	{
	    "_id": "6503bbe146422f0008d1ade4",
	    "customerId": "183a8525-0b97-4f8e-96c1-5d6072d2006c",
	    "jobTitle": "need a Electricians",
	    "country": "LK",
	    "date": "2023-10-15T23:59:00.000Z",
	    "jobDescription": "දවල් කැම  සමග දවසේ පඩිය Rs 2500",
	    "createdAt": "2023-09-15T02:05:21.165Z",
	    "state": "new",
	    "isUrgent": false,
	    "price": "2500",
	    "address": "Boralesgamuwa",
	    "profilePic": "../public/img/person.png",
	    "customerName": "Sampath rubasinghe ",
	    "category": "Electricians",
	    "bidCount": 1
	},
	{
	    "_id": "65015bc899afa000085c572b",
	    "customerId": "9dd910a5-17bd-49ad-83c5-ea70f77e275f",
	    "jobTitle": "Wiring work in office",
	    "country": "LK",
	    "date": "2023-10-13T23:59:00.000Z",
	    "jobDescription": "Need wiring for garden light and relocate fan. Plug point extension ",
	    "createdAt": "2023-09-13T06:50:48.976Z",
	    "state": "new",
	    "isUrgent": true,
	    "price": "3000",
	    "address": "Colombo",
	    "profilePic": "../public/img/person.png",
	    "customerName": "dinusha",
	    "category": "Electricians",
	    "commentCount": 6,
	    "bidCount": 4
	}
 ]

function Jobs() {
  return (
    <>
	{jobs?.map(job => (
		<Card 
		   customerName={job.customerName}
		   jobTitle={job.jobTitle}
		   state={job.state} 
		   isUrgent={job.isUrgent}
		   category={job.category}
		   date={job.date}
		   jobDescription= {job.jobDescription}
		   commentCount={job.commentCount}
		   bidCount={job.bidCount}
		   address={job.address}
		   price={job.price}
		   profilePic={job.profilePic}
		   createdAt={job.createdAt}
		   id={job._id}
		/>
	))}
    </>
  )
}

export default Jobs