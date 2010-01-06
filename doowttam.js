function show(node) { dojo.fx.wipeIn({"node": node, "duration": 650}).play(); }

function hide(node) { dojo.fx.wipeOut({"node": node, "duration": 650}).play(); }

function toggle(pane) {
    if ( dojo.style( pane, "display" ) == "none" ) {
        dojo.query('.detailsPane').forEach(function(node) {
            if ( dojo.style( node, "display" ) != "none" ) {
                hide(node);
            }
        });
        show(pane);
    } else {
        hide(pane);
    }
}

function toggleAbout() { toggle("aboutPane"); }
function toggleContact() { toggle("contactPane"); }
function toggleBlog() { toggle("blogPane"); }
function toggleNetworks() { toggle("networksPane"); }