import React from "react";

const Skill = () => {
  return (
    <>
      <div className=" " style={{ height: "63vh" }}>
        <div className="row">
          <div className="col-10 mx-auto">
            {/* --------------------------------------------------------------------------------- */}
            <div className="row my-3">
              <div className="col-md-6 col-lg-4 col-10 mx-auto my-3">
                <div class="skill_card">
                  <div class="card_inner">
                    <div class="card_title_indicator_skill">
                      <h3 class="card_title_indicator_h3">Programming</h3>
                    </div>
                    <div class="languages_div">
                      <ul class="languages_div_ul">
                        <li class="language_h">Java</li>
                        <li class="language_h">C</li>
                        <li class="language_h">Python</li>
                        <li class="language_h">JavaScript</li>
                      </ul>
                      <h3 class="extra_languages_h">Database :</h3>
                      <ul class="languages_div_ul">
                        <li class="language_h">SQL</li>
                        <li class="language_h">MongoDB</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 col-10 mx-auto my-3">
                {/*start card2 */}
                <div class="skill_card">
                  <div class="card_inner">
                    <div class="card_title_indicator_skill">
                      <h3 class="card_title_indicator_h3">Dev. Skills</h3>
                    </div>
                    <div class="languages_div">
                      <ul class="languages_div_ul">
                        <li class="language_h">HTML</li>
                        <li class="language_h">CSS</li>
                        <li class="language_h">JQuery</li>
                        <li class="language_h">React JS</li>
                        <li class="language_h">Redux</li>
                        <li class="language_h">Node JS</li>
                        <li class="language_h">React-Native (Android)</li>
                        <li class="language_h">Jsp </li>
                        <li class="language_h">Spring Boot</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*end card2 */}
              </div>
              <div className="col-md-6 col-lg-4 col-10 mx-auto my-3">
                <div class="skill_card">
                  <div class="card_inner">
                    <div class="card_title_indicator_skill">
                      <h3 class="card_title_indicator_h3">
                        Technologies/Others
                      </h3>
                    </div>
                    <div class="languages_div">
                      <ul class="languages_div_ul">
                        <li class="language_h">Machine Learning</li>
                        <li class="language_h">R Programming</li>
                        <li class="language_h">Hadoop</li>
                      </ul>
                      <h3 class="extra_languages_h">Other interests :</h3>
                      <ul class="languages_div_ul">
                        <li class="language_h">Playing Cricket</li>
                        <li class="language_h">Learning new Things</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* --------------------------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
