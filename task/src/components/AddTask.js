import React,{useState,useEffect} from 'react'
import axios from 'axios'
const AddTask = ({onAdd}) => {
    

    const fetchAddress1 = async() => {
       const res=await axios.post('https://ltiapi.herokuapp.com/read/address')
       for(let i=0;i<res.data.length;i++){
          if(res.data[i].addressLine1.startsWith(addressLine1)){
              setAddressLine1(res.data[i].addressLine1);
              setAddressLine2(res.data[i].addressLine2);
              setAddressLine3(res.data[i].addressLine3);
              setCity(res.data[i].city)
              setPostCode(res.data[i].postCode)     
          }
       }
    }

    const gender=['Mr.','Mrs.']
    const customer=['New','Old']
    const platform=['Facebook','Twitter']
    const township=['Tohan','Vijaipur']
    const [prefix,setPrefix]=useState(gender[0]);
    const [name,setName]=useState();
    const [addressLine1,setAddressLine1]=useState();
    const [addressLine2,setAddressLine2]=useState();
    const [addressLine3,setAddressLine3]=useState();
    const [customerType,setCustomerType]=useState(customer[0]);
    const [leadSource,setLeadSource]=useState(platform[0]);
    const [city,setCity]=useState(township[0]);
    const [county,setCounty]=useState();
    const [postCode,setPostCode]=useState();
    const [mobileNo,setMobileNo]=useState();
    const [comments,setComments]=useState();

    useEffect(()=>{
        fetchAddress1()
        },[addressLine1])

    const onSubmit=(e)=>{
        e.preventDefault();
        onAdd({prefix,name,addressLine1,addressLine2,addressLine3,customerType,leadSource,city,county,postCode,mobileNo,comments})
        setName('')
        setPrefix(gender[0])
        setAddressLine1('')
        setAddressLine2('')
        setAddressLine3()
        setCustomerType(customer[0])
        setLeadSource(platform[0])
        setCity(township[0])
        setCounty('')
        setPostCode('')
        setMobileNo('')
        setComments('')
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <select onChange={(e)=>setPrefix(e.target.value)}>
              {gender.map((value)=>{
                  return <option value={value}>{value}</option>
              })}
              
            </select> <br/>
            <input type='text' value={name} placeholder='Full Name*' onChange={(e)=>{
                const username=e.target.value;
                if(username.length<1){
                    alert('Enter proper Username');
                }else{
                    setName(username)
                }
            }}
            onBlur={(e)=>{
                const username=e.target.value;
                if(username.length<1){
                    alert('Enter proper Username');
                }
            }}/><br/>
            <input type='text' value={addressLine1} placeholder='Address Line1*' onChange={(e)=>{
                if(e.target.value<1){
                    alert('Enter address1')
                }
                setAddressLine1(e.target.value)
            }
            }
            onBlur={(e)=>{
                if(e.target.value<1){
                    alert('Enter address1')
                }
            }
            }/><br/>
            <input type='text' value={addressLine2} placeholder='Address Line2*' onChange={(e)=>{
                if(e.target.value<1){
                    alert('Enter address2')
                }
                setAddressLine2(e.target.value)}
            }
            onBlur={(e)=>{
                if(e.target.value<1){
                    alert('Enter address2')
                }
             }} /><br/>
            <input type='text' value={addressLine3} placeholder='Address Line3*' onChange={(e)=>{
                if(e.target.value){
                    alert('Enter address3')
                } 
                setAddressLine3(e.target.value)}
            } 
            onBlur={(e)=>{
                if(e.target.value){
                    alert('Enter address3')
                } 
                setAddressLine3(e.target.value)}
            }/><br/>
            <select onChange={(e)=>setCustomerType(e.target.value)}>
            {customer.map((value)=>{
                  return <option value={value}>{value}</option>
              })}
            </select> <br/>
            <select onChange={(e)=>setLeadSource(e.target.value)}>
            {platform.map((value)=>{
                  return <option value={value}>{value}</option>
              })}
            </select><br/>
            <select onChange={(e)=>setCity(e.target.value)}>
            {township.map((value)=>{
                  return <option value={value}>{value}</option>
              })}
            </select><br/>
            <input type='text' value={county} placeholder='Country*' onChange={(e)=>{
                if(e.target.value<1){
                    alert('Enter Country')
                }
                 setCounty(e.target.value)}
            }
            onBlur={(e)=>{
                if(e.target.value<1){
                    alert('Enter Country')
                }
            }
            }/><br/>
            <input type='text' value={postCode} placeholder='Post Code*' onChange={(e)=>{
                if(e.target.value<1){
                    alert('Enter postal address')
                }
                setPostCode(e.target.value)}
            }
            onChange={(e)=>{
                if(e.target.value<1){
                    alert('Enter postal address')
                }
            }
            }
            /><br/>
            <input type='text' value={mobileNo} placeholder='Mobile Number*' onChange={(e)=>{
                if(e.target.value<1 && e.target.value>10){
                    alert('Enter valid mobile number')
                }
                setMobileNo(e.target.value)}
            }
            onChange={(e)=>{
                if(e.target.value<1 && e.target.value>10){
                    alert('Enter valid mobile number')
                }
            }
            }/><br/>
            <textarea placeholder="Comments*" value={comments} onChange={(e)=>{
                if(e.target.value<1){
                    alert('Enter valid comments')
                }
                setComments(e.target.value)}
            }
            onChange={(e)=>{
                if(e.target.value<1){
                    alert('Enter valid comments')
                }
            }
            }></textarea><br/>
            <input type="file" id="myFile" name="filename"></input><br/>
            <input type='submit' value='Save'/>
            </form>
        </div>
    )
}

export default AddTask
