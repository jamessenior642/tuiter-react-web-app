import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
/* eslint-disable jsx-a11y/anchor-is-valid */

const ExploreComponent = () => {
 return(
   <>
     <div className="row mb-2">
       <div className="col-11 position-relative">
         <input placeholder="Search Tuiter"
                className="form-control rounded-pill ps-5"/>
         <i className="bi bi-search position-absolute 
                       wd-nudge-up"></i>
       </div>
       <div className="col-1">
         <i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i>
       </div>
     </div>
       <ul className="nav nav-tabs mb-2">
           <li className="nav-item">
               <a className="nav-link active" href="#">For You</a>
           </li>
           <li className="nav-item">
               <a className="nav-link" href="#">Trending</a>
           </li>
           <li className="nav-item">
               <a className="nav-link" href="#">News</a>
           </li>
           <li className="nav-item d-none d-sm-block">
               <a className="nav-link" href="#">Sports</a>
           </li>
           <li className="nav-item d-none d-md-block">
               <a className="nav-link " href="#">Entertainment</a>
           </li>
       </ul>
     <div className="position-relative mb-2">
       <img src={require("../../images/spacex-starship.png")} alt="" className="w-100"/>
       <h1 className="position-absolute wd-nudge-up text-white">
         SpaceX Starship</h1>
     </div>
     <PostSummaryList/>
   </>
 );
};
export default ExploreComponent;