import React, { Component } from "react";
import { getEmployee } from "../fakedatabase";
import Liked from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";

class EmpList extends Component {

    state = {
        employee: getEmployee(),
        currentPage: 1,
        pageSize: 4
    };

    DeleteRow = emp => {
        const employee = this.state.employee.filter(e => e.id !== emp.id );
        this.setState({
            employee
        }); 
    };  

    handleLike = (emp) => {
        const employee = [...this.state.employee];
        const index = employee.indexOf(emp);
        employee[index].Liked = !employee[index].Liked;
        this.setState({
            employee
        });
    }

    handlePageChange = (page) => {
        this.setState({
            currentPage : page
        })
    }
    
    

    render(){
        
        const {currentPage, pageSize, employee: allEmployee } = this.state;
        const employee = paginate(allEmployee, currentPage, pageSize );

        return(

            <div className="movies-table" style={ { display: "flex", alignItems:"center", flexDirection:"column", margin:"30px" } }>
                
                <div className="mt-heading" style={ { marginBottom:"20px", fontSize:"20px", fontWeight:"700"  } }> There are { this.state.employee.length } employee in the database. </div>
                
                <div className="mt-main">
 
                    <table  style = { { tableLayout: "fixed", width: "600px", textAlign: "left" } } >
                       
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>SALARY</th>
                                    <th>AGE</th>
                                    <th>favourite</th>
                                    <th></th>
                                </tr>
                            </thead>

                            <tbody>
                                { employee.map( emp => 
                                <tr key={emp.id}>
                                    <td>{ emp.employee_name }</td>
                                    <td>{ emp.employee_salary }</td>
                                    <td>{ emp.employee_age }</td>
                                    <td> <Liked Liked={emp.Liked} onLike={ () => this.handleLike(emp) } /> </td>
                                    <td> <button onClick={ () => this.DeleteRow(emp) }> Delete </button> </td>
                                </tr> 
                                ) }
                            </tbody>

                    </table>

                </div>

                <Pagination itemsCount={this.state.employee.length} pageSize={this.state.pageSize} onPageChange={this.handlePageChange} currentPage={this.state.currentPage} />

            </div>

        );
    }
}

export default EmpList;
