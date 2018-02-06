import React from 'react';
import {Link} from 'react-router-dom';

var listStyle = {listStyleType:"none"};

const HomePage =(props) =>(

<div className="container">
		<br/>
    <h2>System Status</h2>
    <div className="row">
      <div className="col-md-6">
        <div className="dashboard-element">
          <h4 className="dashboard-element-title">Appliance Infos</h4>
          <div>  
            <ul id="applianceInfos" style={listStyle}>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="dashboard-element">
        <h4 className="dashboard-element-title">Services</h4>
          <table className="table">
            <thead className="thead-sphinx">
              <tr>
                <th scope="col">Service</th>
                <th scope="col">Active</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TAPESERVER</td>
                <td>YES</td>
              </tr>
            </tbody>  
          </table>    
        </div>  
      </div>
    </div>    
    <div className="row">
      <div className="col-md-12">
        <div className="dashboard-element">
          <h4 className="dashboard-element-title">Virtual Device Status</h4>
          <div id="services">
            <table className="table">
              <thead className="thead-sphinx">
                <tr>
                  <th scope="col">Status</th>
                  <th scope="col">Device Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Last Command</th>
                  <th scope="col">KB/sec</th>
                  <th scope="col">Bytes Transferred</th>
                  <th scope="col">Virtual Media</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Enabled</td>
                  <td>vtd01</td>
                  <td>ULT3580-TD4</td>
                  <td>MODE_SELECT_6</td>
                  <td>0</td>
                  <td>0 Bytes</td>
                  <td>/VAULT40/QPool01/QU0118</td>
                </tr>
                <tr>
                  <td>Enabled</td>
                  <td>vtd02</td>
                  <td>ULT3580-TD4</td>
                  <td>MODE_SELECT_6</td>
                  <td>0</td>
                  <td>0 Bytes</td>
                  <td>/VAULT40/QPool02/QU0209</td>
                </tr>
                <tr>
                  <td>Enabled</td>
                  <td>vtd03</td>
                  <td>ULT3580-TD4</td>
                  <td>MODE_SELECT_6</td>
                  <td>0</td>
                  <td>0 Bytes</td>
                  <td>/VAULT40/QPool03/QU0303</td>
                </tr>
              </tbody>  
            </table>    
          </div> 
        </div>  
      </div> 
    </div>  
    <div className="row">
      <div className="col-md-12">
        <div className="dashboard-element">
          <h4 className="">Job Status</h4> <p className="dashboard-element-title">Displays running jobs, jobs that are scheduled to run in the next 4 hours and jobs that completed in the last 4 hours</p>
          <table className="table">
            <thead className="thead-sphinx">
              <tr>
                <th scope="col">Job Name</th>
                <th scope="col">Job Type</th>
                <th scope="col">Job Description</th>
                <th scope="col">Time</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Decrypt011218121323</td>
                <td>Decrypt Job</td>
                <td>Decrypt 3 cartridges</td>
                <td>Fri Jan 12 12:17 2018</td>
                <td>Completed</td>
              </tr>
              <tr>
                <td>Decrypt011218121322</td>
                <td>Decrypt Job</td>
                <td>Decrypt 3 cartridges</td>
                <td>Fri Jan 12 11:17 2018</td>
                <td>Failed</td>
              </tr>
              <tr>
                <td>Decrypt011218121321</td>
                <td>Decrypt Job</td>
                <td>Decrypt 3 cartridges</td>
                <td>Fri Jan 12 10:17 2018</td>
                <td>Failed</td>
              </tr>

            </tbody>  
          </table>    
        </div>  
      </div> 
    </div> 
    <div className="row">
      <div className="col-md-12">
        <div className="dashboard-element">
          <h4 className="dashboard-element-title">Storage</h4>
          <ul id="applianceInfos" style={listStyle}>
            <li><b>Licensed Capacity:</b> 500TB</li>
            <li><b>Used Capacity:</b> 2.1TB</li>
          </ul>
          <table className="table">
            <thead className="thead-sphinx">
              <tr>
                <th scope="col">Storage Location</th>
                <th scope="col">Sized</th>
                <th scope="col">Used</th>
                <th scope="col">Quota</th>
                <th scope="col">Available</th>
              </tr>
            </thead>
            <tbody>
              <tr className="trbold">
                <td>Storage(zfs)</td>
                <td>2.61T</td>
                <td>11.17G</td>
                <td></td>
                <td>2.60T (100%)</td>
              </tr>
              <tr>
                <td>VAULT01</td>
                <td></td>
                <td>11.17G</td>
                <td>100.00G</td>
                <td>2.60T (100%)</td>
              </tr>               
              <tr className="trbold">
                <td>VAULT00(ext4)</td>
                <td>223G</td>
                <td>63M</td>
                <td></td>
                <td>212G (99%)</td>
              </tr>              
            </tbody>  
          </table>  
        </div>    
      </div>
    </div>
</div>

);

export default HomePage;