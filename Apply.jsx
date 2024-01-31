import "../assets/css/Apply.css";
function Apply(){
    return(
        <>
        <form class="form">
    <p class="title">Application From </p>
    <p class="message">Coimbatore Institute of Technology </p>
        <div class="flex">
        <label>
            <input required="" placeholder="" type="text" class="input"></input>
            <span>Firstname</span>
        </label>

        <label>
            <input required="" placeholder="" type="text" class="input"></input>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label> 
        <input required="" placeholder="" type="email" class="input"></input>
        <span>Email</span>
    </label> 
        
    <label> 
        <input required="" placeholder="" type="password" class="input"></input>
        <span>Password</span>
    </label>
    <label>
        <input required="" placeholder="" type="password" class="input"></input>
        <span>Confirm password</span>
    </label>
    <button class="submit">Submit</button>
    <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>
</form>
</>
    );
}
export default Apply;