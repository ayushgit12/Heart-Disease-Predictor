import { useState } from 'react'
import axios from 'axios'
import './index.css'


function App() {

  const [age, setAge] = useState(0)
  const [sex, setSex] = useState(0)
  const [cp, setCp] = useState(0)
  const [trestbps, setTrestbps] = useState(0)
  const [chol, setChol] = useState(0)
  const [fbs, setFbs] = useState(0)
  const [restecg, setRestecg] = useState(0)
  const [thalach, setThalach] = useState(0)
  const [exang, setExang] = useState(0)
  const [oldpeak, setOldpeak] = useState(0)
  const [slope, setSlope] = useState(0)
  const [ca, setCa] = useState(0)
  const [thal, setThal] = useState(0)
  const [prediction, setPrediction] = useState('')



  const handleSubmit = async () => {
    const data = {
      age: parseFloat(age),
      sex: parseFloat(sex),
      cp: parseFloat(cp),
      trestbps: parseFloat(trestbps),
      chol: parseFloat(chol),
      fbs: parseFloat(fbs),
      restecg: parseFloat(restecg),
      thalach: parseFloat(thalach),
      exang: parseFloat(exang),
      oldpeak: parseFloat(oldpeak),
      slope: parseFloat(slope),
      ca: parseFloat(ca),
      thal: parseFloat(thal)
    }

    await axios.post('http://localhost:8000/predict', data)
      .then(res => {
        console.log(res.data)
        setPrediction(res.data.prediction)
      })
      .catch(err => {
        console.log(err)
      })
    }




  return (


    // 'age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'

    <>
<div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
<div className='text-5xl font-semibold border w-12 h-fit border-black rounded-full text-center bg-gray-200'>i</div>
    <h1 className='text-4xl font-bold m-3 font-sans text-center my-16'><span className='text-6xl text-red-500'>H</span>EART <span className='text-6xl text-red-500'>D</span>ISEASE <span className='text-6xl text-red-500'>C</span>LASSIFIER</h1>
    <div className='flex flex-wrap gap-16 m-6 text-xl'> 
      <div>
        <h1>Age</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={age} onChange={(e)=>setAge(e.target.value)} />
      </div>
      <div>
        <h1>Sex</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={sex} onChange={(e)=>setSex(e.target.value)} />
      </div>
      <div>
        <h1>Chest Pain</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={cp} onChange={(e)=>setCp(e.target.value)} />
      </div>
      <div>
        <h1>Resting blood pressure</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={trestbps} onChange={(e)=>setTrestbps(e.target.value)} />
      </div>
      <div>
        <h1>Cholestrol Level</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={chol} onChange={(e)=>setChol(e.target.value)} />
      </div>
      <div>
        <h1>Fasting Blood Sugar</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={fbs} onChange={(e)=>setFbs(e.target.value)} />
      </div>
      <div>
        <h1>Resting ECG</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={restecg} onChange={(e)=>setRestecg(e.target.value)} />
      </div>

      <div>
        <h1>Maximum Heart Rate</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={thalach} onChange={(e)=>setThalach(e.target.value)} />
      </div>
      <div>
        <h1>Exercise Induced Angina</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={exang} onChange={(e)=>setExang(e.target.value)} />
      </div>
      <div>
        <h1>Old Peak</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={oldpeak} onChange={(e)=>setOldpeak(e.target.value)} />
      </div>
      <div>
        <h1>Heart Rate Slope</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={slope} onChange={(e)=>setSlope(e.target.value)} />
      </div>
      <div>
        <h1>Coronary Artery Value</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={ca} onChange={(e)=>setCa(e.target.value)} />
      </div>
      <div>
        <h1>Thalassemia</h1>
      <input type="text" className='border w-60 border-black pl-3 rounded-md p-1' value={thal} onChange={(e)=>setThal(e.target.value)} />
      </div>
      </div>
    <div className='text-center mt-16'>
      <button onClick={handleSubmit} className='bg-blue-400 ml-6 px-3 py-2 rounded-md border shadow-xl text-center'>Submit</button>
      </div>

      <div className={`${prediction==="Heart Disease" ? "text-red-500" : "text-green-500"} text-2xl font-bold  m-4 text-center`}>{prediction}</div>
    </>
  )
}

export default App
