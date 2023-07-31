import { useState,useEffetct } from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Legend,
    ResponsiveContainer,
  } from "recharts"
  
  const data = [
    {
      group_name: "Group A",
      boys: 200,
      girls: 400,
    },
    {
      group_name: "Group B",
      boys: 3000,
      girls: 500,
    },
    {
      group_name: "Group C",
      boys: 1000,
      girls: 1500,
    },
    {
      group_name: "Group D",
      boys: 700,
      girls: 1200,
    },
  ]
  


const BarchartForDashboard = ()=>{

    const [listOfData, setData] = useState({
        getData: []
    });


useEffetct(()=>{
    getLast7DaysTransactions()
}, [])

    const getLast7DaysTransactions = async () => {
      const url =
        "https://bursting-gelding-24.hasura.app/api/rest/daywise-totals-last-7-days-admin";
      const options = {
        method: "GET",
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "admin",
        },
      };
  
      const response = await fetch(url, options);
      const datas = await response.json();
      setData({
        listOfData: datas
      });
    
    };
    const {getData} = listOfData
    console.log(getData)
  
    

    const DataFormatter = (number) => {
        if (number > 1000) {
          return `${(number / 1000).toString()}k`
        }
        return number.toString()
      }
return(
    <ResponsiveContainer width="100%" height={500}>
    <BarChart
      data={data}
      margin={{
        top: 5,
      }}
    >
      <XAxis
        dataKey="group_name"
        tick={{
          stroke: "gray",
          strokeWidth: 1,
        }}
      />
      <YAxis
        tickFormatter={DataFormatter}
        tick={{
          stroke: "gray",
          strokeWidth: 0,
        }}
      />
      <Legend
        wrapperStyle={{
          padding: 30,
        }}
      />
      <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
      <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
    </BarChart>
  </ResponsiveContainer>
)
    }


export default BarchartForDashboard