

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

module.exports = {
    templateHTML_config,
  }