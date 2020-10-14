<template>
    <div id="wrapper">
        <div class="main-container">
            <TitleBar></TitleBar>
            <header>
                <div class="menu-btns">
                    <Button type="menu">
                        import
                    </Button>
                    <Button type="menu">
                        export
                    </Button>
                    <Button type="menu">
                        setting
                    </Button>
                </div>
            </header>
        </div>
    </div>
</template>>

<script>
import Vue from "vue"
import Button from "./UI/Button.vue"
import TitleBar from "./UI/TitleBar.vue"

export default Vue.extend(
    {
        name:"LandingPage",
        components:{
            Button,
            TitleBar
        }
    }
)
</script>>

<style lang="scss">
@import "../assets/css/general.scss";

/*scroll bar*/
::-webkit-scrollbar {
  position: relative;
  width: 10px;
  background: #212121;
  border-radius: 35px;
}
</style>