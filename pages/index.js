import '../public/static/styles/tailwind.css';
import { withRouter } from 'next/router'


 class Login extends React.Component {

    componentDidMount() {
        if (window.sessionStorage.getItem("name") !== null) {
            this.props.push("/chat");
        }
    }

    submitHandler = (event) => {
        event.preventDefault();
        let name = event.target.name.value
        if (name.length === 0) {
            alert("Please enter at least one character for the name.")
        } else {
            window.sessionStorage.setItem("name",name);
        }
        this.props.router.push("/chat");
    }

    render = () => {

        return (
            <div id="login">

            <div className="m-auto shadow-md p-4">
                <form onSubmit={this.submitHandler} >
                    <div >
                        <p className="text-lg p-1 my-1">You're about to enter a public chatroom</p>
                        <p className="text-lg p-1 my-1" >What shall we call you?</p>
                    </div>
                    <div className="flex flex-col">
                        <input type="text" name="name" className="border rounded-lg border-green-darker focus:border-green-light focus:outline-none focus:border-transparent border-black block rounded-ful p-4 mb-4 mt-4" />
                        <input type="submit" className="block rounded-lg cursor-pointer p-4 text-lg text-white hover:bg-green bg-green-darker focus:outline-none" value="Allez" />
                    </div>
                </form>
            </div>

            <style  jsx>{`
                #login {
                    width:100vw;
                    height:100vh;
                    background-color: #f7f7f7;
                    display : flex;
                }

                input[text] {
                    border: 1px solid green;
                }
            `}</style>
            </div>
        );
    }
 }

 export default withRouter(Login);