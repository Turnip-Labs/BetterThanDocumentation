# Canonical ID ranges

From the creation of Minecraft all the way up to 1.7, Minecraft always used integers to denote blocks and items. This was a horrible idea! 

Basically, while it works fine for Mojang while making the game, modders don't have such luck. 
There's no guarantee someone won't just place an item in any given place you might have selected.
As such, this document serves to document the **canonical BTA ID range**.

## Adding Mods to This List

To add a mod here, simply request an available ID range of sane length in the BTA modding discord. 
It will be added to this list by one of our maintainers.

If a mod not in this list runs into your declared ID range as stated here.
It would be common courtesy that the offending mod changes their range.

Though, keep in mind that **this document is not the law**, it can be ignored!
Please don't get yourself into keyboard fights over IDs!

## ID Ranges by Mod

<div>
<input style="padding: .625em 2em" type="number" placeholder="Start" id="ID_CHECK_START">
<input style="padding: .625em 2em" type="number" placeholder="End"   id="ID_CHECK_END">
<button class="md-button md-button--primary" id="ID_CHECK_BUTTON">Check </button>
</div>

<p id="ID_CHECK_RESULT"></p>

<script defer src="../assets/checkIDRange.js"></script>

<table id="ID_TABLE"> 
    <tr>
        <td>Mod id</td> 
        <td colspan="2">Items</td>
        <td colspan="2">Blocks</td>
    </tr> 
    <tr>
        <td></td>
        <td>Start</td> <td>End</td>
        <td>Start</td> <td>End</td>
    </tr> 
    <tr><td>Better than Adventure!</td> <td>16000</td> <td>17000</td> <td>0</td> <td>1200</td></tr>
    <tr><td>Signal Industries</td> <td>17100</td> <td>17222</td> <td>1200</td> <td>1344</td></tr>
    <tr><td>RetroStorage</td> <td>18000</td> <td>18046</td> <td>1400</td> <td>1421</td></tr>
    <tr><td>Catalyst: Multipart</td> <td>19640</td> <td>19640</td> <td>3256</td> <td>3257</td></tr>
    <tr><td>Golden Bat</td> <td>23232</td> <td>23232</td> <td>N/A</td> <td>N/A</td></tr>
    <tr><td>Better with Aether (BWA)</td> <td>26000</td> <td>26500</td> <td>10000</td> <td>10500</td></tr>
</table>

