import React from 'react'
import JobDetailsCard from '../components/JobDetailsCard'

const jobObj = {
	"_id": "655e30864105360008123813",
	"category": 8,
	"customerId": "dac941eb-1544-44ed-943d-25ba9c07120d",
	"country": "LK",
	"createdAt": "2023-11-22T16:47:02.199Z",
	"state": "new",
	"reviewing_post": false,
	"privacy": "public",
	"rejectReason": null,
	"reviewing_update": false,
	"updating": false,
	"bids": [],
	"jobTitle": "GI වැඩ දන්නා අය ඉක්මනින් අවශ්‍යයි 0766846999",
	"jobDescription": "GI වැඩ දන්නා අය ඉක්මනින් අවශ්‍යයි 0766846999",
	"price": "0766846999",
	"date": "2023-12-22T23:59:00.000Z",
	"isUrgent": true,
	"images": [],
	"location": {
	    "address": "Colombo",
	    "lat": 6.9270786,
	    "lng": 79.861243
	},
	"customerName": "Shamith ",
	"customerPhone": "+94766846999",
	"customerProfilePic": "../public/img/person.png",
	"customerRating": 0,
	"customerJobCount": 0,
	"jobberId": null
 }

function JobDetails() {
  return (
    <div>
      <JobDetailsCard 
	     customerName={jobObj.customerName}
		location={jobObj.location}
		jobDescription={jobObj.jobDescription}
	/>
    </div>
  )
}

export default JobDetails