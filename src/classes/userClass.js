class userClass {
  uId;
  fName;
  lName;
  email;
  address;
  gender;
  age;
  country;

  constructor(uId, fName, lName, email, address, gender, age, country) {
    this.uId = uId;
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.address = address;
    this.gender = gender;
    this.age = age;
    this.country = country;
  }

  toObj() {
    return {
      uid: this.uId,
      fName: this.fName,
      lName: this.lName,
      email: this.email,
      address: this.address,
      age: this.age,
      gender: this.gender,
      country: this.country,
    };
  }
}

export default userClass;
