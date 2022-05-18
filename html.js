

function templateHTML_config(scr_ip, 
    scr_out1_name, scr_out2_name, scr_out3_name, scr_out4_name,scr_out5_name,scr_out6_name,
    scr_out1_src, scr_out2_src, scr_out3_src, scr_out4_src, scr_out5_src, scr_out6_src,
    scr_out1_dst, scr_out2_dst, scr_out3_dst, scr_out4_dst, scr_out5_dst, scr_out6_dst){                            
    //template for config.html                             
    return `
<!doctype html>
<html>
    <head>
    <title>Scrambler Info</title>
    <meta charset="utf-8">
    </head>
    <body>
    <img src="resource/coretrust_logo.png" alt="logo" />
    <h1>Scrambler Outport Configuration </h1><br>
    <hr style="border: solid 1px blue;">
    <br>
    <table>
        <form action="./ch_config" method="POST">
        <tr>
        <td>
            <label for="scrIP">Scrambler IP Address</label>
        </td>
        <td align="left" colspan="3">
            <input type="text" name="scr_ip" value="${scr_ip}" />
        </td>
        <tr>   
        <tr>
        <td>
            <label for="scrOut1">Out #1</label>
        </td>
        <td>
            <input type="text" name="scr_out1_name" value="${scr_out1_name}" />
        </td>
        <td>
            <input type="text" name="scr_out1_src" value="${scr_out1_src}" />
        </td>
        <td>
            <input type="text" name="scr_out1_dst" value="${scr_out1_dst}" />
        </td>      
        </tr>
        <tr>
        <td>
            <label for="scrOut2">Out #2</label>
        </td>
        <td>
            <input type="text" name="scr_out2_name" value="${scr_out2_name}" />
        </td>
        <td>
            <input type="text" name="scr_out2_src" value="${scr_out2_src}" />
        </td>
        <td>
            <input type="text" name="scr_out2_dst" value="${scr_out2_dst}" />
        </td>      
        </tr>
        <tr>
        <td>
            <label for="scrOut3">Out #3</label>
        </td>
        <td>
            <input type="text" name="scr_out3_name" value="${scr_out3_name}" />
        </td>
        <td>
            <input type="text" name="scr_out3_src" value="${scr_out3_src}" />
        </td>
        <td>
            <input type="text" name="scr_out3_dst" value="${scr_out3_dst}" />
        </td>     
        </tr>
        <tr>
        <td>
            <label for="scrOut4">Out #4</label>
        </td>
        <td>
            <input type="text" name="scr_out4_name" value="${scr_out4_name}" />
        </td>
        <td>
            <input type="text" name="scr_out4_src" value="${scr_out4_src}" />
        </td>
        <td>
            <input type="text" name="scr_out4_dst" value="${scr_out4_dst}" />
        </td>     
        </tr>
        <tr>
        <td>
            <label for="scrOut5">Out #5</label>
        </td>
        <td>
            <input type="text" name="scr_out5_name" value="${scr_out5_name}" />
        </td>
        <td>
            <input type="text" name="scr_out5_src" value="${scr_out5_src}" />
        </td>
        <td>
            <input type="text" name="scr_out5_dst" value="${scr_out5_dst}" />
        </td>     
        </tr>
        <tr>
        <td>
            <label for="scrOut6">Out #6</label>
        </td>
        <td>
            <input type="text" name="scr_out6_name" value="${scr_out6_name}" />
        </td>
        <td>
            <input type="text" name="scr_out6_src" value="${scr_out6_src}" />
        </td>
        <td>
            <input type="text" name="scr_out6_dst" value="${scr_out6_dst}" />
        </td>      
        </tr>
        <tr>
        <td colspan="5" align="right">
            <input type="submit" value="설정값 적용">
        </td>
        </tr>
        </form>
    </table>
    <br><br>
    <hr style="border: solid 1px blue;">
    <br>
    <footer>
    <p>Copyright @ 2022 Coretrust. All rights reserved.</p>
    </footer>
    </body>
</html>
    `;
}


function select_string(level){
    switch(level){
    case 'level1':
        return `
            <option value="disable"> Disable </option>
            <option value="level1" selected> Level1 </option>
            <option value="level2"> Level2 </option>
            <option value="level3"> Level3 </option>
            <option value="level4"> Level4 </option>
            `;
    
    case 'level2':
        return `
            <option value="disable"> Disable </option>
            <option value="level1"> Level1 </option>
            <option value="level2" selected> Level2 </option>
            <option value="level3"> Level3 </option>
            <option value="level4"> Level4 </option>
            `;

    case 'level3':
        return `
            <option value="disable"> Disable </option>
            <option value="level1"> Level1 </option>
            <option value="level2"> Level2 </option>
            <option value="level3" selected> Level3 </option>
            <option value="level4"> Level4 </option>
            `;
    case 'level4':
        return `
            <option value="disable"> Disable </option>
            <option value="level1"> Level1 </option>
            <option value="level2"> Level2 </option>
            <option value="level3"> Level3 </option>
            <option value="level4" selected> Level4 </option>
            `;
    case 'disable':
        return `
            <option value="disable" selected> Disable </option>
            <option value="level1"> Level1 </option>
            <option value="level2"> Level2 </option>
            <option value="level3"> Level3 </option>
            <option value="level4"> Level4 </option>
            `;     
    default:
    return `
        <option value="disable" selected> Disable </option>
        <option value="level1"> Level1 </option>
        <option value="level2"> Level2 </option>
        <option value="level3"> Level3 </option>
        <option value="level4"> Level4 </option>
        `;       
    }
}


function templateHTML_level( scr_ip,
    scr_out1_name, scr_out2_name, scr_out3_name, scr_out4_name,scr_out5_name,scr_out6_name,
    scr_out1_src, scr_out2_src, scr_out3_src, scr_out4_src, scr_out5_src, scr_out6_src,
    scr_out1_dst, scr_out2_dst, scr_out3_dst, scr_out4_dst, scr_out5_dst, scr_out6_dst,
        scr_out1_config,scr_out2_config,scr_out3_config,scr_out4_config,scr_out5_config,scr_out6_config){
    
    var out1_level = select_string(scr_out1_config);
    var out2_level = select_string(scr_out2_config);
    var out3_level = select_string(scr_out3_config);
    var out4_level = select_string(scr_out4_config);
    var out5_level = select_string(scr_out5_config);
    var out6_level = select_string(scr_out6_config);

    //template for index.html 
    return `
    <!doctype html>
    <html>
    <head>
      <title>Scrambler Info</title>
      <meta charset="utf-8">
    </head>
    <body>
      <img src="resource/coretrust_logo.png" alt="logo" />
      <h1>Scrambling Level Configuration</h1><br>
      <hr style="border: solid 1px blue;">
      <br>
      <table>
        <tr>
          <td>
            <label for="scrIP">Scrambler IP Address</label>
          </td>
          <td align="left" colspan="3">
            <input type="text" value="${scr_ip}" disabled/>
          </td>
        <tr>
        <form action="./level_config" method="POST">
        <tr>
          <td>
            <label for="scrOut1">${scr_out1_name}</label>
          </td>
          <td>
            <input type="text" value="${scr_out1_src}" disabled/>
          </td>
          <td>
            <input type="text" value="${scr_out1_dst}" disabled/>
          </td>
          <td>
            <select id="out1_config" name="out1_config">
              ${out1_level}       
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="scrOut2">${scr_out2_name}</label>
          </td>
          <td>
            <input type="text" value="${scr_out2_src}" disabled/>
          </td>
          <td>
            <input type="text" value="${scr_out2_dst}" disabled/>
          </td>
          <td>
            <select id="out2_config" name="out2_config">
                ${out2_level}        
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="scrOut3">${scr_out3_name}</label>
          </td>
          <td>
            <input type="text" value="${scr_out3_src}" disabled/>
          </td>
          <td>
            <input type="text" value="${scr_out3_dst}" disabled/>
          </td>
          <td>
            <select id="out3_config" name="out3_config">
                ${out3_level}      
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="scrOut4">${scr_out4_name}</label>
          </td>
          <td>
            <input type="text" value="${scr_out4_src}" disabled/>
          </td>
          <td>
            <input type="text" value="${scr_out4_dst}" disabled/>
          </td>
          <td>
            <select id="out4_config" name="out4_config">
                ${out4_level}        
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="scrOut5">${scr_out5_name}</label>
          </td>
          <td>
            <input type="text" value="${scr_out5_src}" disabled/>
          </td>
          <td>
            <input type="text" value="${scr_out5_dst}" disabled/>
          </td>
          <td>
            <select id="out5_config" name="out5_config">
                ${out5_level}        
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <label for="scrOut6">${scr_out6_name}</label>
          </td>
          <td>
            <input type="text" value="${scr_out6_src}" disabled/>
          </td>
          <td>
            <input type="text" value="${scr_out6_dst}" disabled/>
          </td>
          <td>
            <select id="out6_config" name="out6_config">
                ${out6_level}         
            </select>
          </td>
        </tr>
        <tr>
          <td colspan="4" align="right">
            <input type="submit" value="설정값 적용">
          </td>          
        </tr>
        </form>
    </table>
    <br><br>
    <hr style="border: solid 1px blue;">
    <br>
    <footer>
      <p>Copyright @ 2022 Coretrust. All rights reserved.</p>
    </footer>
    </body>
    </html>    
    `;
}

module.exports = {
    templateHTML_config,
    templateHTML_level
}