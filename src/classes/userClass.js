class userClass {
  uId;
  fName;
  lName;
  email;
  address;
  gender;
  age;
  country;

  constructor(
    uId,
    fName,
    lName,
    email,
    address,
    gender,
    age,
    country
  ) {
    this.uId = uId;
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.address = address;
    this.gender = gender;
    this.age = age;
    this.country = country;
  }

  toObj(){
    return {
      uid: this.uId,
      fname: this.fName,
      lname: this.lName,
      email: this.email,
      address: this.address,
      gender: this.gender,
      age: this.gender,
      country : this.country
    }
  }
}

export default userClass;
