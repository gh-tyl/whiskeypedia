<template>
  <div>
    <aside></aside>
  </div>
  <div class="contact-page">
    <h1><aside>CONTACT US</aside></h1>
    <p>We would love to hear from you! Get in touch and a member of our team will get back to you as soon as possible.</p>
    <div class="contact-main">
      <aside></aside>
      <form>
        <span>*indicates required field</span>
        <input type="text" placeholder="First Name*" required/>
        <input type="text" placeholder="Last Name*" required/>
        <input class="email" type="email" placeholder="Email*" required/>
        <input type="text" placeholder="Order Number"/>
        <input type="text" placeholder="Subject"/>
        <textarea placeholder="Message*" required />
        <button type="button">SEND</button>
      </form>
      <aside class="footer-logo"></aside>
      <p>Please enjoy responsibly.</p>
    </div>
  </div>
  <div><span> &copy; Copyright 2022 </span></div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>


