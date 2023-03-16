import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const statues = ["all", "alive", "dead", "unknown"];
const genders = ["all", "male", "female", "genderless", "unknown"];

const FilterCriteria = () => {

  const initialStatee = {
    name: "Pedro",
    status: "alive",
    specie: "",
    gender: "female",
    type: ""
  }

  const dispatch = useDispatch()
  dispatch({ type: 'filters/changeState', payload: initialStatee })

  useSelector((state: any) =>{
    console.log(state);
  })
  
  const useSelectorr = () =>{
    
  }

  return (
    <div className="absolute h-fit w-96 bg-gray-900 py-2 rounded-md top-full ">
      <form className="mx-2" method="post">
        <fieldset className="text-white flex gap-2 mt-2">
          <legend className="text-white">Status</legend>
          {
            statues.map((status, index) => {
              return (
                <div key={status}>
                  <input type="radio" name="status" id={status} value={status} defaultChecked={index === 0} onChange={useSelectorr} />
                  <label htmlFor={status}> {status.charAt(0).toUpperCase() + status.slice(1)}</label>
                </div>
              )
            })
          }
        </fieldset>
        <fieldset className="text-white flex gap-2 mt-2">
          <legend className="text-white">Gender</legend>
          {
            genders.map((gender, index) => {
              return (
                <div key={gender}>
                  <input type="radio" name="gender" id={gender} value={gender} defaultChecked={index === 0} />
                  <label htmlFor={gender}> {gender.charAt(0).toUpperCase() + gender.slice(1)}</label>
                </div>
              )
            })
          }
        </fieldset>
        <div className="flex flex-col mt-2">
          <label className="text-white"> Specie</label>
          <input className="px-3 shadow appearance-none border rounded py-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" name="specie" id="specie" placeholder="type a specie" />
        </div>
        <div className="flex justify-center">
          <button className="mt-2 bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Apply
          </button>
        </div>
      </form>
    </div>
  )
}

export default FilterCriteria
