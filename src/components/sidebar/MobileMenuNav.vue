<template>
  <div
    class="mobile-menu"
    v-if="
      ![
        'AllInvestments',
        'AllSavings',
        'Savings',
        'ReferralDetails',
        'CommissionDetails',
        'PersonalDetails',
        'NextOfKin',
        'AccountManager',
        'ChangePassword',
        'ChangePin',
        'InvestmentDetails',
        'MySavingsDetails',
        'AllSavingsSubCategory',
        'BankAndCard',
      ].includes(currentSitePage) &&
      !logoutModal &&
      !PersonalDetailsModal &&
      !UpdateProfileModal &&
      !UpdateNextOfKinModal &&
      !AccountManagerModal &&
      !helpAndSupportModal &&
      !changePasswordModal &&
      !addPinModal &&
      !changePinModal &&
      !accountProtectionModal &&
      !securityModal &&
      !bankModal &&
      !addCardModal &&
      !fundWalletModal &&
      !fundWalletByForeignBank &&
      !fundWalletByLocalBank &&
      !fundWalletByCardModal &&
      !topUpSavingsModal.status &&
      !billAndDataModal &&
      !cableTvModal &&
      !BillsFormModal.status &&
      !selectAirtimeDataModal &&
      !buyAirtimeFormModal &&
      !buyDataFormModal &&
      !transferToBankModal &&
      !transferToCustomerModal &&
      !transferModal1 &&
      !uploadPaymentEvidenceModal
    "
  >
    <router-link
      :to="{ name: 'Home' }"
      :class="['Home'].includes(currentSitePage) && 'active'"
    >
      <i class="sl sl-icon-home" v-if="darkMode"></i>
      <img src="@/assets/img/home.svg" v-if="!darkMode" alt="" />
      <span class="nav-text">Home</span>
    </router-link>
    <router-link
      :to="{ name: 'Products' }"
      :class="
        [
          'Products',
          'Savings',
          'AllSavings',
          'Investment',
          'AllInvestments',
        ].includes(currentSitePage) && 'active'
      "
    >
      <i class="sl sl-icon-social-dropbox" v-if="darkMode"></i>
      <img src="@/assets/img/product.svg" v-if="!darkMode" alt="" />
      <span class="nav-text">Products</span>
    </router-link>

    <router-link
      :to="{ name: 'Wallet' }"
      :class="['Wallet'].includes(currentSitePage) && 'active'"
    >
      <i class="sl sl-icon-wallet" v-if="darkMode"></i>
      <img src="@/assets/img/wallet.svg" v-if="!darkMode" alt="" />

      <span class="nav-text">Wallet</span>
    </router-link>

    <!-- <router-link
      :to="{ name: 'Home' }"
      :class="['Home'].includes(currentSitePage) && 'active'"
    >
      <i class="bx bxs-cog"></i>
      <span class="nav-text">Transactions</span>
    </router-link> -->

    <router-link
      :to="{ name: 'Profile' }"
      :class="['Profile'].includes(currentSitePage) && 'active'"
    >
      <i class="sl sl-icon-emotsmile" v-if="darkMode"></i>
      <img src="@/assets/img/user-image3.svg" v-if="!darkMode" alt="" />
      <span class="nav-text">Account</span>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
