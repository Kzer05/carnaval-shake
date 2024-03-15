<script setup>
import { RouterLink } from 'vue-router'
import DecoratedButton from '@/components/DecoratedButtonComponent.vue';
import Box from '@/components/BoxComponent.vue';
</script>


<!-- todo: fazer uma versão sem o botão de codigo do amigo --> 

<template>
    <Box id="welcome-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" viewBox="0 0 65 65" fill="none">
                <path
                    d="M22.1345 60.9354C21.0128 60.9354 20.1035 61.8449 20.1035 62.9665C20.1035 64.0882 21.0128 64.9974 22.1345 64.9974V60.9354ZM38.3826 64.9974C39.5042 64.9974 40.4135 64.0882 40.4135 62.9665C40.4135 61.8449 39.5042 60.9354 38.3826 60.9354V64.9974ZM22.1345 64.9974H38.3826V60.9354H22.1345V64.9974Z"
                    fill="#E98458" />
                <path
                    d="M28.2275 62.9666C28.2275 64.0882 29.1368 64.9974 30.2587 64.9974C31.3803 64.9974 32.2895 64.0882 32.2895 62.9666H28.2275ZM32.2895 36.5636C32.2895 35.4419 31.3803 34.5325 30.2587 34.5325C29.1368 34.5325 28.2275 35.4419 28.2275 36.5636H32.2895ZM32.2895 62.9666V36.5636H28.2275V62.9666H32.2895Z"
                    fill="#E98458" />
                <path
                    d="M16.2563 15.131C16.758 16.1342 17.978 16.5407 18.9812 16.039C19.9845 15.5372 20.391 14.3172 19.8892 13.314L16.2563 15.131ZM2.031 0.00549328C0.90931 0.00549328 0 0.914805 0 2.0365C0 3.15818 0.90931 4.0675 2.031 4.0675V0.00549328ZM9.4667 4.0675C9.84394 4.06737 10.2144 4.17234 10.5353 4.37059L12.6701 0.914784C11.7073 0.320016 10.5978 0.00515463 9.4661 0.00549344L9.4667 4.0675ZM10.5353 4.37059C10.8562 4.56886 11.1156 4.85257 11.2844 5.18998L14.9173 3.37294C14.4111 2.36078 13.6329 1.50955 12.6701 0.914784L10.5353 4.37059ZM11.2844 5.18998L16.2563 15.131L19.8892 13.314L14.9173 3.37294L11.2844 5.18998ZM2.031 4.0675H9.4667L9.4661 0.00549344L2.031 0.00549328V4.0675Z"
                    fill="#E98458" />
                <path
                    d="M50.4648 14.2224L50.469 12.1914H50.4648V14.2224ZM52.4876 16.4538L54.5086 16.6573L54.5094 16.6483L52.4876 16.4538ZM8.02501 16.4538L6.00359 16.651L6.00421 16.6573L8.02501 16.4538ZM10.0479 14.2197L10.048 12.1887H10.044L10.0479 14.2197ZM50.4607 16.2534L52.1125 12.542C51.5951 12.312 51.0353 12.1926 50.469 12.1914L50.4607 16.2534ZM50.4607 16.2534L50.4646 16.2552L53.4741 13.527C53.0937 13.1075 52.6301 12.772 52.1125 12.542L50.4607 16.2534ZM50.4646 16.2552L54.3212 14.9783C54.1431 14.4408 53.8545 13.9465 53.4741 13.527L50.4646 16.2552ZM50.4646 16.2552L50.4661 16.2594L54.5094 16.6483C54.5635 16.0846 54.4995 15.5158 54.3212 14.9783L50.4646 16.2552ZM50.4669 16.2504C49.9625 21.26 47.6155 25.9039 43.8814 29.2812L46.6059 32.2938C51.087 28.2412 53.9036 22.6687 54.5086 16.6573L50.4669 16.2504ZM43.8814 29.2812C40.147 32.6583 35.2912 34.5285 30.2563 34.5285V38.5905C36.2982 38.5905 42.1248 36.3464 46.6059 32.2938L43.8814 29.2812ZM30.2563 34.5285C25.2214 34.5285 20.3658 32.6583 16.6314 29.2812L13.9068 32.2938C18.3879 36.3464 24.2145 38.5905 30.2563 38.5905V34.5285ZM16.6314 29.2812C12.8971 25.9039 10.5502 21.26 10.0458 16.2504L6.00421 16.6573C6.60944 22.6687 9.42571 28.2412 13.9068 32.2938L16.6314 29.2812ZM10.0464 16.2567L6.18995 14.9794C6.01203 15.5175 5.94857 16.0869 6.00359 16.651L10.0464 16.2567ZM10.0464 16.2567L10.0478 16.2525L7.0367 13.5261C6.65629 13.9462 6.36787 14.4412 6.18995 14.9794L10.0464 16.2567ZM10.0478 16.2525L8.39902 12.5396C7.88115 12.7699 7.4171 13.1059 7.0367 13.5261L10.0478 16.2525ZM10.0478 16.2525L10.0518 16.2507L10.044 12.1887C9.47719 12.1898 8.91689 12.3093 8.39902 12.5396L10.0478 16.2525ZM10.0478 16.2525L50.4646 16.2552L50.4648 12.1914L10.048 12.1887L10.0478 16.2525Z"
                    fill="#E98458" />
                <path
                    d="M40.662 14.6486C40.8882 15.7472 41.9626 16.4543 43.0611 16.2279C44.1596 16.0015 44.8668 14.9274 44.6403 13.8288L40.662 14.6486ZM52.596 20.3154C51.4741 20.3149 50.5644 21.2238 50.5639 22.3455C50.5634 23.4672 51.4723 24.3769 52.594 24.3774L52.596 20.3154ZM44.6403 13.8288C44.3018 12.1854 44.4801 10.4776 45.1509 8.93963L41.4277 7.31565C40.4215 9.62229 40.154 12.1838 40.662 14.6486L44.6403 13.8288ZM45.1509 8.93963C45.8217 7.40171 46.9522 6.10909 48.3869 5.23929L46.2812 1.76572C44.1291 3.07029 42.4339 5.00898 41.4277 7.31565L45.1509 8.93963ZM48.3869 5.23929C49.8218 4.36946 51.4905 3.96508 53.1644 4.08164L53.4468 0.0294554C50.9362 -0.145368 48.4332 0.46114 46.2812 1.76572L48.3869 5.23929ZM53.1644 4.08164C54.8383 4.1982 56.4349 4.83 57.7355 5.8903L60.3022 2.74212C58.3519 1.15187 55.9571 0.204279 53.4468 0.0294554L53.1644 4.08164ZM57.7355 5.8903C59.0357 6.95058 59.9761 8.38739 60.4272 10.0035L64.3397 8.91119C63.6629 6.48737 62.2527 4.33238 60.3022 2.74212L57.7355 5.8903ZM60.4272 10.0035C60.8783 11.6195 60.8183 13.3356 60.2551 14.9162L64.0815 16.2795C64.9263 13.9089 65.0165 11.335 64.3397 8.91119L60.4272 10.0035ZM60.2551 14.9162C59.6922 16.4967 58.6535 17.8643 57.2823 18.831L59.6225 22.151C61.6794 20.7011 63.2371 18.65 64.0815 16.2795L60.2551 14.9162ZM57.2823 18.831C55.9108 19.7977 54.2738 20.3162 52.596 20.3154L52.594 24.3774C55.1105 24.3787 57.5657 23.6009 59.6225 22.151L57.2823 18.831Z"
                    fill="#E98458" />
            </svg>

        <p>SEJA BEM VINDO AO</p>
        <h1>CARNAVAL SHAKE</h1>
    </Box>
    <div id="div-image-event">
        <img id="big-image-event" src="../assets/cup.png" alt="Taça">
        <!-- <img id="reflex-big-image-event" src="./imgs/cup.png" alt="Reflexo da taça"> -->
    </div>

    <div id="buttons">
        <RouterLink to="/signup">
            <DecoratedButton type="filled">CRIAR MEU DRINK</DecoratedButton>
        </RouterLink>
        
        <RouterLink to="/code_friend">
            <DecoratedButton type="filled">INSERIR CÓDIGO DE AMIGO</DecoratedButton>
        </RouterLink>
        
        <RouterLink to="/signin">
            <DecoratedButton type="text" text-color="#FF2E00">Já tenho meu drink!</DecoratedButton>
        </RouterLink>
    </div>

    <footer> © 2024 Revigorah - All Rights Reserved.</footer>
</template>


<style scoped>
.credits {
    position: absolute;
    bottom: 0;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.credits p {
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-weight: 500;
}

h1 {
    font-weight: 700;
    font-size: 24px;
}


#welcome-box {
    width: 80vw;
    margin: 20px auto;
    margin-top: 10%;
}

#welcome-box h1,
#welcome-box p {
    margin: 0px;
}

#div-image-event {
    display: flex;
    height: 35vh;
    flex-direction: column;
    align-items: center;
}

#big-image-event {
    /* height: 35vh; */
    height: 35vh;
    max-width: 100%;
    object-fit: cover;
}

#reflex-big-image-event {
    object-fit: cover;
    height: 100%;
    max-width: 100%;
    position: relative;
    top: -25%;
    z-index: -1;
    transform: rotate(180deg);
    filter: brightness(0) blur(10px) opacity(0.2);
    mask: linear-gradient(to bottom, transparent, transparent, white);

}

#buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 30vh;
    align-items: center;
}

#buttons .button {
    display: block;
    margin: 2% auto;
}

#buttons a {
    margin-top: 20px;
    color: #FF2E00;
}

#button-create-event {
    display: block;
    margin: 20px auto;
}

footer {
    color: white;
}

@media only screen and  (max-height: 670px) {
    #buttons {
        height: 25vh;
        justify-content: center;
    }

    footer {
        display: none;
    }
    #div-image-event {
        height: 35vh;
    }

    #big-image-event {
        height: 35vh;
    }
}

@media only screen and (max-width: 767px) and (min-height: 800px) {
    #div-image-event {
        height: 40%;
        margin: 5% 0;
    }
}

@media screen and (min-width: 768px) {

    #welcome-box {
        width: 40%;
        height: min-content;
        margin-top: 10%;
        padding: 50px;
    }


    #div-image-event {
        height: 100%;
        display: flex;
        justify-content: center;
    }

    #reflex-big-image-event {
        display: none;
    }

    #buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: min-content;
    }

    .credits {
        grid-area: 2 / 1 / 3 / 4;
    }
}
</style>