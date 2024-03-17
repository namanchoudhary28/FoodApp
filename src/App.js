import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header';
import Body from './Body';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import RestaurantMenu from './RestaurantMenu';
const Title = () => <h1>Hello title</h1>

// const Heading=()=>(
//     <div id="container">
//         <Title/>
//         <h1>Hello component composition</h1>


//     </div>
// )


/* <div id="parent">
    <div id="child1">
        <h1>Child1 h1</h1>
        <h2>Child2 h2</h2>
    </div>
    <div id="class2">
        <h1>Child2 h1</h1>
        <h2>Child2 h2</h2>
    </div>
</div> */


// const parent=React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child1"},[React.createElement("h1",{},"Child1 h1"),React.createElement("h2",{},"Child1 h2")])
// ,
// React.createElement("div",{id:"child2"},[React.createElement("h1",{},"Child2 h1"),React.createElement("h2",{},"Child2 h2")])

// ])

// const heading=React.createElement("h1",{id:"heading"},"React hello world")





const AppLayout = () => {
    return (
        <div className='app-layout'>
            <Header />
            <Outlet/>
        </div>
    )
}




const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body />,
              },
              {
                path: "/about",
                element: <About />,
              },
              {
                path: "/contact",
                element: <Contact />,
              },
              {
                path: "/restaurant/:resId",
                element:<RestaurantMenu/>,
              },
            ]


    }

])




const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter