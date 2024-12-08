<div class="header-container">
    <div class="brand" >
        p3go.com
    </div>
    <nav class="menu">
        <ul>
            <!-- <li>
                <a href="/">Home</a>
            </li> -->
            <li>
                <a href="#about">About us</a>
            </li>
        </ul>
    </nav>
</div>

<style>
    .header-container {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 60px;
        border-bottom: 1px solid lightgray;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    }

    .brand {
        min-width: 200px;
        font-weight: 600;
        cursor: pointer;
    }

    .menu > ul {
        display: flex;
        justify-content: space-around;
    }

    .menu > ul > li {
        width: 80px;
    }

    @media only screen and (max-width: 680px) {
        .header-container {
            padding: 0 30px;
        }

        .menu {
            display: none;
        }

    }
</style>