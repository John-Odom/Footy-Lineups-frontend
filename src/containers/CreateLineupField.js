import React from 'react'

const CreateLineupField = (props) =>{    
    return(
            <div>
                <div className="show-teams-div">
                    <div className="striker-area">
                      <div className="striker422">
                          {/* <select name="striker" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select> */}
                            <div class="ui fluid search selection dropdown">
                              <input type="hidden" name="country" />
                              <i className="dropdown icon"></i>
                              <div class="default text">Select Country</div>
                              <div class="menu">
                              <div class="item">Afghanistan</div>
                              <div class="item" data-value="ax"><i class="ax flag"></i>Aland Islands</div>
                              <div class="item" data-value="al"><i class="al flag"></i>Albania</div>
                              <div class="item" data-value="dz"><i class="dz flag"></i>Algeria</div>
                              <div class="item" data-value="as"><i class="as flag"></i>American Samoa</div>
                              <div class="item" data-value="ad"><i class="ad flag"></i>Andorra</div>
                              <div class="item" data-value="ao"><i class="ao flag"></i>Angola</div>
                              <div class="item" data-value="ai"><i class="ai flag"></i>Anguilla</div>
                              <div class="item" data-value="ag"><i class="ag flag"></i>Antigua</div>
                              <div class="item" data-value="ar"><i class="ar flag"></i>Argentina</div>
                            </div>
                             </div>
                    </div>
                    </div>
                    <div className = "winger-area">
                      <div className = "lw422"> 
                          <select name="lw" onChange={(e) => props.updatePlayer(e)}>
                          {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                        </div>
                      <div className = "rw422">
                          <select name="rw" onChange={(e) => props.updatePlayer(e)}>
                          {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                        </div>
                    </div>
                    <div className = "cam-area">
                      <div className = "lcam422">
                            <select name="lcam" onChange={(e) => props.updatePlayer(e)}>
                            {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "rcam422">
                            <select name="rcam" onChange={(e) => props.updatePlayer(e)}>
                            {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                    </div>
                    <div className = "cdm-area">
                      <div className = "cdm422">
                            <select name="cdm" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                        </div>
                    </div>
                    <div className = "def-area">
                      <div className = "lb">
                            <select name="lb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "lcb">
                            <select name="lcb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "rcb">
                            <select name="rcb" onChange={(e) => props.updatePlayer(e)}>
                                {props.dropdownHeader()}
                                {props.dropdownSelects()}
                            </select>
                      </div>
                      <div className = "rb">
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