const {Component} = React;

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos: [
                {
                    todoText: "Become a programmer",
                    isCompleted: false
                },
            ],
            inputText: "Lets do this!",
        }
    }
//adding a new todo using the value of inputText in state
    handleSubmit(e){
        e.preventDefault();
        let newTodo = {
            todoText: this.state.inputText,
            isCompleted: false
        }
        this.setState({todos: [...this.state.todos, newTodo]})
    }
//updating state with the input text as it changes
    handleChange(e) {
        this.setState({inputText: e.target.value})
    }
//changing isCompleted value on individual todo items when their check icon is clicked 
    toggleIsCompleted(index) {
        this.setState({
            todos: this.state.todos.map((todo, i) => {
                if (i === index) {
                    return{...todo, isCompleted: !todo.isCompleted}
                } else {
                    return todo;
                }
            })
        })
    } 
 
    render () {
        return (
            <div className="m-5 m-auto" style={{width:"90%"}}>
                <h1 className="text-center my-5">What do you need to DO?</h1>
                <div className="m-auto" style ={{width:"90%"}}>
                    <form className="m-auto rounded d-flex flex-column align-content-center justify-content-center"
                          style ={{width:"300px", border:"5px solid green"}} 
                          onSubmit={(e) => this.handleSubmit(e)}>
                        <input type="text" 
                               className="m-2" 
                               style ={{width:"270px"}} 
                               value={this.state.inputText} 
                               onChange={(e) => this.handleChange(e)} />
                        <button className="m-2 btn btn-success btn-lg" type="submit">SUBMIT</button>
                    </form>
                </div>
                    <div className="m-2 rounded" 
                         style={{backgroundColor: "rgba(110, 198, 239, 0.5)"}}>
                        <h2 className="px-5" 
                            style={{backgroundColor: "rgb(110, 198, 239)"}}>Todo:</h2>
                        {this.state.todos.map((todo, index) => {
                            if (!todo.isCompleted) {
                                return (
                                    <TodoList 
                                          key={index} 
                                          isCompleted={todo.isCompleted} 
                                          text={todo.todoText} 
                                          toggle={() => this.toggleIsCompleted(index)} />
                                )
                            } else {
                                return null;
                            }

                            }
                        )}
                    </div>
                    <div className="m-2 text-muted rounded" 
                         style={{backgroundColor: "rgba(106, 232, 138, 0.5)"}}>
                        <h2 style={{color:"black", backgroundColor:"rgb(106, 232, 138)"}} 
                            className="px-5">Todone:</h2>
                        {this.state.todos.map((todo, index) => {
                            if (todo.isCompleted) {
                                return (
                                    <TodoList 
                                          key={index} 
                                          isCompleted={todo.isCompleted} 
                                          text={todo.todoText} 
                                          toggle={() => this.toggleIsCompleted(index)} />
                                )
                            } else {
                                return null;
                            }
                        }
                        )}
                    </div>
            </div>
        )
    }
}

let TodoList = (props) => {
    return (
        <div className="d-flex m-2 " style={{width:"60%"}}>
            <h3 className="mx-2" style={{}}>{props.text}</h3>
            {props.isCompleted ? <i className="far fa-2x fa-check-square" onClick={() => props.toggle()}></i> : <i className="far fa-2x fa-square" onClick={() => props.toggle()}></i> } 
        </div>   
    )
}


ReactDOM.render(<Form/>, document.getElementById('root'));