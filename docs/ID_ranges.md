# Canonical ID ranges

From the creation of Minecraft all the way up to 1.7, Minecraft always used integer ID to denote blocks and items.
This works fine for Minecraft, however not for modders.

For Modders there is no guarantee that a given ID was not used by another mod, thus resulting in ID convicts.
This document serves to document the **canonical BTA ID range** to avoid and resolve such conflicts.

## Adding Mods to This List

To add a mod here, simply publicise your used ID range in the [BTA modding discord](https://discord.com/channels/1138825919088312403/1411747698532548809). 
Publicising your ID ranges is voluntarily, but we hightly encourag it.
It will be added to this list by one of our maintainers.

## Confic resolution

If a mod not in this list runs into your declared ID range as stated here, it would be common courtesy that the offending mod changes their range.  
Keep in mind this obligation is not binding.  

Please resolve the conflicts with the mod maker of the offending mods and keep it civil.  
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
    <tr><td>Stardew Farming</td> <td>22000</td> <td>22057</td> <td>6000</td> <td>6036</td></tr>
    <tr><td>More Snow</td> <td>N/A</td> <td>N/A</td> <td>8</td> <td>60</td></tr>
    <tr><td>Wild Wombats</td> <td>17550</td> <td>17551</td> <td>3500</td> <td>3500</td></tr>
    <tr><td>Randomite Ore</td> <td>N/A</td> <td>N/A</td> <td>2500</td> <td>2504</td></tr>
    <tr><td>World of Color</td> <td>21200</td> <td>21229</td> <td>1200</td> <td>1231</td></tr>
    <tr><td>Bonus Blocks</td> <td>16650</td> <td>16663</td> <td>1500</td> <td>1700</td></tr>
    <tr><td>Caves and Cliffs</td> <td>16650</td> <td>16663</td> <td>1500</td> <td>1700</td></tr>
    <tr><td>BTA CC Tweaked</td> <td>19000</td> <td>19008</td> <td>1800</td> <td>1812</td></tr>
    <tr><td>BTA Tiny Chunk Loader</td> <td>N/A</td> <td>N/A</td> <td>1910</td> <td>1910</td></tr>
    <tr><td>BTA Cupboards</td> <td>N/A</td> <td>N/A</td> <td>1900</td> <td>1901</td></tr>
    <tr><td>TLOTD</td> <td>19000</td> <td>19100</td> <td>11000</td> <td>11060</td></tr>
    <tr><td>Melrose Extended Chests</td> <td>N/A</td> <td>N/A</td> <td>2504</td> <td>2505</td></tr>
    <tr><td>BTA Chuted</td> <td>N/A</td> <td>N/A</td> <td>8664</td> <td>8664</td></tr>
    <tr><td>Better Than Battle Towers</td><td>N/A</td><td>N/A</td><td>6340</td><td>6340</td></tr>
    <tr><td>Washi Mod(Unreleased)</td><td>28401</td><td>28800</td><td>8401</td><td>8800</td></tr>
    <tr><td>Faithful Nether Reactor Core Port (Unreleased)</td><td>N/A</td><td>N/A</td><td>3265</td><td>3268</td></tr>
    <tr><td>Quite Better Than Adventure</td><td>20000</td><td>20100</td><td>4000</td><td>4100</td></tr>
    <tr><td>Terrapon BTA</td><td>25400</td><td>25500</td><td>4700</td><td>4800</td></tr>
</table>