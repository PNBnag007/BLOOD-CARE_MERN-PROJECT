import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Cart.css'
import { useParams, useHistory } from 'react-router-dom';
import { isAuth } from 'helpers/auth';

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

const Cart = () => {
    const [type, settype] = useState("A+");
    const history = useHistory();
    const bankId = useParams().bankId;
    const [data1, setdata1] = useState()
    async function displayRazorpay() {
		const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

		if (!res) {
			alert('Razorpay SDK failed to load. Are you online?')
			return
		}

        const data = await fetch('http://localhost:5000/razorpay', { method: 'POST',headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },body: JSON.stringify({amount:(quantity*100 -100)*100}) }).then((t) =>
        t.json()
        )

        console.log(data)


		const options = {
			key: "rzp_test_QQz5khL9L6FKoC",
			currency: "INR",
			amount: `${(quantity*100 -100)*100}`,
            name: 'Donation',
            order_id: data.id,
			
			description: 'Thank you for nothing. Please give us some money',
			// handler: function (response) {
			// 	alert(response.razorpay_payment_id)
			// 	alert(response.razorpay_order_id)
			// 	alert(response.razorpay_signature)
			// },
			prefill: {
				email: 'sdfdsjfh2@ndsfdf.com',
				phone_number: '9899999999'
			}
		}

        
		const paymentObject = new window.Razorpay(options)
		paymentObject.open()



        const data1 = await fetch('http://localhost:5000/api/orders', { method: 'POST',headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },body: JSON.stringify({
            bloodbankId:`${bankId}`,
            userskey: isAuth()._id ,
            bloodType:type,
            quantity
          })}).then((t) =>{
        t.json();
        
          })

          setdata1(data1);

        

	}

    

    // useEffect(() => {
    //     history.push('/success');
    // }, [data1])

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    const [quantity, setquantity] = useState(0);

    
    
    const Quantityhandler = (event) => {
        setquantity(event.target.value);
        console.log(quantity);
    }

    const [items] = React.useState([
        {
        label: "A+",
        value: "A+"
        },
        { label: "A-",
        value: "A-" 
        },
        { label: "B+", 
        value: "B+" 
        },
        { label: "B-", 
        value: "B-" 
        },
        { label: "AB+", 
        value: "AB+" 
        },
        { label: "AB-", 
        value: "AB-" 
        },
        { label: "O+", 
        value: "O+" 
        },
        { label: "O-", 
        value: "O-" 
        },
      ]);


    return (
    <div className="body-wrapper">
        <div className="order-wrapper">
            <div className="top-order">
                <h3>Order Blood<span className="span_dot">.</span></h3>
            </div>
            <div className="bottom-order">
                <div className="div_inputs">
                    {/* <!-- Start: options_input --> */}
                <div id="input_options">

	<select value={type} onChange={(e)=>settype(e.currentTarget.value)} className="input">
        {items.map(item => (
            <option
            key={item.value}
            value={item.value}
            >
            {item.label}
            </option>
      ))}
	</select>
</div>
                    {/* <!-- End: options_input --> */}
                    <h1 className="heading_quantity">Quantity</h1><input type="number" value={quantity} onChange={Quantityhandler} className="input_number"/>
                    <h1 className="heading_bloodtype">Blood Group</h1>
                </div>
                <div className="div_amounts">
                    {/* <!-- Start: amount --> */}
                    <h1 className="taxable_amount">Amount</h1>
                    {/* <!-- End: amount --> */}
                    {/* <!-- Start: amount_left --> */}
                    <h1 className="heading_amount_left">{quantity*100}</h1>
                    {/* <!-- End: amount_left --> */}
                    {/* <!-- Start: rewards --> */}
                    <h1 className="heading_rewards">rewards</h1>
                    {/* <!-- End: rewards --> */}
                    {/* <!-- Start: rewards_left --> */}
                    <h1 className="heading_rewards_left">-100</h1>
                    {/* <!-- End: rewards_left --> */}
                    {/* <!-- Start: total_amount --> */}
                    <h1 className="heading_total">Total Amount</h1>
                    {/* <!-- End: total_amount --> */}
                    {/* <!-- Start: total_amount_left --> */}
                    <h1 className="heading_total_left">{quantity*100-100}</h1>
                    {/* <!-- End: total_amount_left --> */}
                </div>
                <a onClick = {displayRazorpay}
                    target = "_black"
                    rel ="jkgn"
                    >
                    <button className="btn1 btn-primary button_pos" type="button">Order</button>
                </a>
                </div>
        </div>
    </div>
    );
}

export default Cart