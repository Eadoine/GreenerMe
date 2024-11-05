import React , { useState, useEffect } from 'react';
import './Information.css';

const Information = () =>{
  return (
    <>
    <div className="grid-container">
      <div class="top">Top Section</div>
      <div class="left">Left Sidebar</div>
      <div class="main">Main Content</div>
      <div class="right">Right Sidebar</div>
    </div>
    </>
  );
};

export default Information;
