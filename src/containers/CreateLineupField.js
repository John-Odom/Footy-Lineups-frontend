import React from 'react'
import TestPageForDropdownSelect from '../TestPageForDropdownSelect'


const CreateLineupField = (props) =>{    
    return(
            <div id="create-lineup-field">
                <div className="show-teams-div">
                    <div className="striker-area">
                      <div className="striker-select"> 
                            <TestPageForDropdownSelect  
                            name="striker" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                    </div>
                    </div>
                    <div className = "winger-area">
                      <div className = "lw-select"> 
                            <TestPageForDropdownSelect name="lw" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                        </div>
                      <div className = "rw-select">
                            <TestPageForDropdownSelect name="rw" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                        </div>
                    </div>
                    <div className = "cam-area">
                      <div className = "lcam-select">
                            {/* <select name="lcam" onChange={(e) => props.updatePlayer(e)}>
                            {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select> */}
                            <TestPageForDropdownSelect name="lcam" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                      </div>
                      <div className = "rcam-select">
                            {/* <select name="rcam" onChange={(e) => props.updatePlayer(e)}>
                            {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select> */}
                            <TestPageForDropdownSelect name="rcam" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                      </div>
                    </div>
                    <div className = "cdm-area">
                      <div className = "cdm-select">
                            {/* <select name="cdm" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select> */}
                            <TestPageForDropdownSelect name="cdm" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                        </div>
                    </div>
                    <div className = "def-area">
                      <div className = "lb-select">
                            {/* <select name="lb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select> */}
                            <TestPageForDropdownSelect name="lb"  updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                      </div>
                      <div className = "lcb-select">
                            {/* <select name="lcb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select> */}
                            <TestPageForDropdownSelect name="lcb" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                      </div>
                      <div className = "rcb-select">
                            {/* <select name="rcb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select> */}
                            <TestPageForDropdownSelect name="rcb" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                      </div>
                      <div className = "rb-select">
                            {/* <select name="rb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select> */}
                            <TestPageForDropdownSelect name="rb" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                      </div>
                    </div>
                    <div className="goalkeeper-area">
                      <div className="goalkeeper">
                            {/* <select name="goalkeeper" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select> */}
                            <TestPageForDropdownSelect name="goalkeeper" updatePlayer={props.updatePlayer} playersOnTeam={props.playersOnTeam}/>
                      </div>
                    </div>
                </div>
                
            </div>
        )
    }
export default CreateLineupField