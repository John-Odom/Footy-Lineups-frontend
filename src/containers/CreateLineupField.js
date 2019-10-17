import React from 'react'

const CreateLineupField = (props) =>{    
    return(
            <div>
                <div className="show-teams-div">
                    <div className="striker-area">
                      <div className="striker">
                          <select name="striker" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                    </div>
                    </div>
                    <div className = "winger-area">
                      <div className = "left-winger"> 
                          <select name="lw" onChange={(e) => props.updatePlayer(e)}>
                          {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                        </div>
                      <div className = "right-winger">
                          <select name="rw" onChange={(e) => props.updatePlayer(e)}>
                          {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                        </div>
                    </div>
                    <div className = "cam-area">
                      <div className = "left-cam">
                            <select name="lcam" onChange={(e) => props.updatePlayer(e)}>
                            {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "right-cam">
                            <select name="rcam" onChange={(e) => props.updatePlayer(e)}>
                            {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                    </div>
                    <div className = "cdm-area">
                      <div className = "cdm">
                            <select name="cdm" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                        </div>
                    </div>
                    <div className = "def-area">
                      <div className = "left-back">
                            <select name="lb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "left-center-back">
                            <select name="lcb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "right-center-back">
                            <select name="rcb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "right-back">
                            <select name="rb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                    </div>
                    <div className="goalkeeper-area">
                      <div className="goalkeeper">
                            <select name="goalkeeper" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                    </div>
                </div>
                
            </div>
        )
    }
export default CreateLineupField