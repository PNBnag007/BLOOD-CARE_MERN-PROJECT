# BLOOD CARE_MERN PROJECT
Enterprise Application Development Course Project @IIITS

<!-- # TEAM MEMBERS
- P. NAGENDRA BABU    - S20180010138
- Y. VISHNU TEJA      - S20180010196
- V. SOWMYA			    	   - S20180010187
- N. SIVA SAI KRISHNA - S20180010116
- M. SUMANTH CHOWDARY -S20180010096 -->

# HOW TO RUN
```
Open Two terminals, let's say A & B

In A:
	cd bloodcare
	npm install
	npm start

In B:
	cd backend
	npm install
	npm start

```

# Problem Statement
Despite advances in technology, today's blood bank systems are running in manual system.  As such, there is a  prevalent problem  in the availability of needed blood types.
When a patient requires a rare blood group, if the hospital is running out of stock then family members and relatives are  trying  with social media for blood donors which is useless.Our Major features rely on providing blood in emergency situations to the needy. 


# Idea Proposal
user  can get  the nearby blood donors details  and blood banks  details having the requested blood group.
can order the required blood quantity by payment through razorpay.
also they can know the donors details who are willing to donate the blood nearby them

# NEARBY BLOOD BANKS
- IN THIS PAGE WE PROVIDE THE DETAILS OF THE BLOOD BANKS BY CITY, STATE AND BLOOD AVAILABILITY AND THE USER CAN ORDER THE BLOOD 
- ![alt text](https://github.com/sherlockholmes211/Weather_App/blob/main/Screen%20Shots/Blood%20Banks%20Table.png)

# ORDER PAGE
- IN THIS PAGE THE USER CAN BUY THE BLOOD WITH SPECIFIC QUANTITIES AND PAY THROUGH RAZORPAY PAYMENT GATEWAY
- ![](https://github.com/sherlockholmes211/Weather_App/blob/main/Screen%20Shots/order.gif)

# DONORS PAGE
- IN THIS PAGE THE USER CAN KNOW THE DONORS WHO ARE WILLING TO DONATE BLOOD
- ![alt text](https://github.com/sherlockholmes211/Weather_App/blob/main/Screen%20Shots/Donors%20Table.png)

# IMPLEMENTATION OF SECURITY (EAD) FEATURE
- TWO STEP VERIFICATION : 
  - STEP 1: Enter EMAIL AND PASSWORD.
  - STEP 2: Enter OTP sent to mobile
  - ![](https://github.com/sherlockholmes211/Weather_App/blob/main/Screen%20Shots/two%20step%20Verification.gif)
- EMAIL AND MOBILE NUMBER AUTHENTICATION:
  - To ensue the authenticity of the user.
  - ![](https://github.com/sherlockholmes211/Weather_App/blob/main/Screen%20Shots/Email%20reset.gif)

# TECH STACK
- Frontend -  REACT
- Backend  -  NODE JS , EXPRESS
- Editor - VScode
- Database - MONGODB
- Version control - Git, Github
- API - Rest

# EAD FEATURES
1. TWO STEP VERIFICATION : 
   - STEP -1 : Enter EMAIL AND PASSWORD.
   - STEP -2 : Enter OTP sent to mobile
2. JWT  TOKEN BASED AUTHENTICATION: 
   - To ensure the authenticity of the data received in JSON format and to send the data to only authorized users.
3. EMAIL AND MOBILE NUMBER AUTHENTICATION:
   - To ensue the authenticity of the user.
4. PASSWORD HASHING.
   - User password is hashed and then stored in the database .
   - Crypto-js library  from npm is used.
<!-- 

# CONTRIBUTIONS
- N.SIVA  SAI  KRISHNA (S20180010116): 
  1. HOME PAGE(FRONT END & BACKEND)
  2. USER PROFILE (FRONT END & BACKEND)
  3. EDIT PROFILE (FRONT END & BACKEND)
  4. JSON WEB TOKENIZATION (EAD FEATURE)
- P.NAGENDRA BABU (S20180010138):
  1. MULTI ROLE  LOGIN/SIGN UP PAGE (FOR CUSTOMER & BLOOD BANK)  AND ALSO GOOGLE &  FACEBOOK SIGN IN FACILITY(FRONT END & BACKEND)
  2. RESET PASSWORD THROUGH MAIL (FRONT END & BACKEND)
  3. PHONE NUMBER AND EMAIL VERIFICATION DURING SIGN UP.(FRONT END & BACKEND)
  4. TWO STEP VERIFICATION IMPLEMENTATION DURING SIGN IN . (FRONTEND & BACKEND).(EAD FEATURE)
  5.JSON WEB TOKENIZATION.(EAD FEATURE)
- Y.VISHNU TEJA (S20180010196):
  1. NEARBY BLOOD DONORS PAGE,(FRONTEND & BACKEND)
  2. PAYMENT GATEWAY(RAZORPAY)
  3. BLOOD BANKS PAGE(FRONTEND & BACKEND)
  4. JSON WEB TOKENIZATION (EAD FEATURE)
- M.SUMANTH  CHOWDARY (S20180010096): 
  1. CONTACT FORM (FRONTEND & BACKEND)
  2. CHATBOT
  3. JSON WEB TOKENIZATION(EAD FEATURE).
- V.SOWMYA (S20180010187): 
  1. ADMIN-PROFILE (FRONTEND & BACKEND)
  2. EDIT PROFILE(ADMIN) (FRONT END & BACKEND)
  3. SOCIAL MEDIA INTEGRATION (FRONTEND & BACKEND)
  4. JSON WEB TOKENIZATION (EAD FEATURE)
 -->














