<template>
  <div>
    <div class="relsify-siderbar">
      <div class="relsify-siderbar-scroll">
        <ul class="metismenu" id="menu">
          <li :class="currentSitePage == 'AddCard' && 'activeNav'">
            <router-link :to="{ name: 'AddCard' }" class="has-arrow">
              <i class="sl sl-icon-credit-card"></i>

              <span class="nav-text">Add Card</span>
            </router-link>
          </li>
          <li :class="currentSitePage == 'AllCards' && 'activeNav'">
            <router-link :to="{ name: 'AllCards' }" class="has-arrow">
              <i class="sl sl-icon-directions"></i>

              <span class="nav-text">All Cards</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="relsify-sidebar-overlay"></div>
  </div>
</template>

<script>
import "@/mixins";
export default {};
</script>

<style></style>
