import { Component } from "react";

import {
  CreditAndDebitTileMoneyAndName,
  CreditAndDebitTileName,
  DebitTile,
  DebitTileMoney,
} from "./styledComponents";

class DashboardDebitCard extends Component {
  state = { debit: 0 };

  componentDidMount() {
    this.getDebitAmounts();
  }

  getDebitAmounts = async () => {
    const apiUrl =
      "https://bursting-gelding-24.hasura.app/api/rest/credit-debit-totals";
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": "1",
      },
      method: "GET",
    };
    const response = await fetch(apiUrl, options);
    const data = await response.json();
    const getDebitData = data.totals_credit_debit_transactions[0];
    const getDebitDataSum = getDebitData.sum;
    this.setState({ debit: getDebitDataSum });
  };
  render() {
    const { debit } = this.state;
    return (
      <DebitTile>
        <CreditAndDebitTileMoneyAndName>
          <DebitTileMoney>${debit}</DebitTileMoney>
          <CreditAndDebitTileName>Debit</CreditAndDebitTileName>
        </CreditAndDebitTileMoneyAndName>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="189"
          height="155"
          viewBox="0 0 189 155"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M88.8497 1.34216C110.929 1.34216 108.41 35.9144 124.35 46.4521C145.447 60.3994 181.743 53.4919 181.743 77.4301C181.743 119.457 134.662 134.68 83.3609 134.68C32.0598 134.68 -11.7163 111.372 3.55797 69.4592C18.8334 27.55 37.544 1.34216 88.8497 1.34216Z"
            fill="#E9EEF7"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M70.8847 140.351C107.757 140.351 137.646 143.571 137.646 147.545C137.646 151.519 107.756 154.736 70.8847 154.736C34.0138 154.736 4.12354 151.515 4.12354 147.545C4.12354 143.575 34.0126 140.351 70.8847 140.351Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M139.22 125.151C128.918 125.151 120.57 127.033 120.57 129.353C120.57 131.674 128.918 133.559 139.22 133.559C149.522 133.559 157.87 131.676 157.87 129.353C157.87 127.03 149.519 125.151 139.22 125.151Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M141.827 112.039C131.529 112.039 123.177 113.921 123.177 116.245C123.177 118.57 131.529 120.448 141.827 120.448C152.126 120.448 160.481 118.565 160.481 116.245C160.481 113.926 152.131 112.039 141.827 112.039Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M142.851 119.497C132.549 119.497 124.201 121.38 124.201 123.703C124.201 126.026 132.549 127.906 142.851 127.906C153.153 127.906 161.502 126.023 161.502 123.703C161.502 121.384 153.15 119.497 142.851 119.497Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M145.46 106.388C135.161 106.388 126.81 108.271 126.81 110.591C126.81 112.91 135.161 114.793 145.46 114.793C155.758 114.793 164.109 112.91 164.109 110.591C164.109 108.271 155.761 106.388 145.46 106.388Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M139.22 138.301C128.918 138.301 120.57 136.421 120.57 134.098V129.355C120.57 131.679 128.918 133.561 139.22 133.561C149.522 133.561 157.87 131.678 157.87 129.355V134.098C157.87 136.422 149.519 138.301 139.22 138.301Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M141.827 125.193C131.529 125.193 123.177 123.311 123.177 120.987V116.247C123.177 118.567 131.529 120.449 141.827 120.449C152.126 120.449 160.478 118.566 160.478 116.247V120.987C160.478 123.311 152.129 125.193 141.827 125.193Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M142.851 132.65C132.549 132.65 124.201 130.767 124.201 128.447V123.703C124.201 126.024 132.549 127.906 142.851 127.906C153.153 127.906 161.502 126.023 161.502 123.703V128.447C161.502 130.767 153.15 132.65 142.851 132.65Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M145.46 119.538C135.161 119.538 126.81 117.655 126.81 115.334V110.591C126.81 112.911 135.161 114.793 145.46 114.793C155.758 114.793 164.109 112.91 164.109 110.591V115.334C164.109 117.655 155.761 119.538 145.46 119.538Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M108.231 136.856C97.9327 136.856 89.5811 138.738 89.5811 141.062C89.5811 143.387 97.9327 145.265 108.231 145.265C118.53 145.265 126.881 143.382 126.881 141.062C126.881 138.743 118.533 136.856 108.231 136.856Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M108.628 124.736C118.93 124.736 127.278 126.619 127.278 128.939C127.278 131.259 118.93 133.145 108.628 133.145C98.3262 133.145 89.978 131.263 89.978 128.939C89.978 126.615 98.3297 124.736 108.628 124.736Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M107.588 113.401C117.887 113.401 126.238 115.283 126.238 117.604C126.238 119.924 117.887 121.807 107.588 121.807C97.2897 121.807 88.938 119.924 88.938 117.604C88.938 115.283 97.2862 113.401 107.588 113.401Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M111.863 131.206C101.564 131.206 93.2139 133.089 93.2139 135.409C93.2139 137.728 101.564 139.611 111.863 139.611C122.161 139.611 130.512 137.729 130.512 135.409C130.512 133.088 122.164 131.206 111.863 131.206Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M104.997 119.086C115.299 119.086 123.647 120.968 123.647 123.289C123.647 125.609 115.299 127.491 104.997 127.491C94.6949 127.491 86.3467 125.609 86.3467 123.289C86.3467 120.968 94.6983 119.086 104.997 119.086Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M103.957 107.748C114.255 107.748 122.607 109.631 122.607 111.95C122.607 114.27 114.255 116.153 103.957 116.153C93.6583 116.153 85.3066 114.273 85.3066 111.95C85.3066 109.627 93.6548 107.748 103.957 107.748Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M108.231 150.01C97.9327 150.01 89.5811 148.128 89.5811 145.807V141.064C89.5811 143.384 97.9327 145.266 108.231 145.266C118.53 145.266 126.881 143.383 126.881 141.064V145.807C126.881 148.128 118.533 150.01 108.231 150.01Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M108.628 137.89C118.93 137.89 127.278 136.007 127.278 133.684V128.94C127.278 131.264 118.93 133.146 108.628 133.146C98.3262 133.146 89.978 131.264 89.978 128.94V133.684C89.978 136.008 98.3297 137.89 108.628 137.89Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M107.588 126.551C117.887 126.551 126.238 124.669 126.238 122.348V117.605C126.238 119.926 117.887 121.809 107.588 121.809C97.2897 121.809 88.938 119.926 88.938 117.605V122.348C88.938 124.669 97.2862 126.551 107.588 126.551Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M111.863 144.355C101.564 144.355 93.2139 142.473 93.2139 140.152V135.409C93.2139 137.729 101.564 139.611 111.863 139.611C122.161 139.611 130.512 137.729 130.512 135.409V140.152C130.512 142.473 122.164 144.355 111.863 144.355Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M104.997 132.236C115.299 132.236 123.647 130.354 123.647 128.033V123.29C123.647 125.611 115.299 127.492 104.997 127.492C94.6949 127.492 86.3467 125.611 86.3467 123.29V128.033C86.3467 130.354 94.6983 132.236 104.997 132.236Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M103.957 120.897C114.255 120.897 122.607 119.015 122.607 116.695V111.951C122.607 114.272 114.255 116.154 103.957 116.154C93.6583 116.154 85.3066 114.271 85.3066 111.951V116.695C85.3066 119.015 93.6548 120.897 103.957 120.897Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M136.906 108.473C136.447 108.853 135.968 109.394 135.825 110.119L133.276 110.17L133.128 111.279L135.871 111.221C136.292 112.408 138.023 113.083 140.385 113.035C142.814 112.988 144.17 112.18 145.423 111.061C146.524 110 147.367 109.613 148.595 109.585C149.8 109.561 150.686 109.938 150.577 110.752C150.481 111.463 149.865 112.141 149.252 112.597L151.905 112.881C152.49 112.44 153.068 111.693 153.212 110.968L155.957 110.913L156.104 109.805L153.167 109.866C152.808 108.596 150.932 107.891 148.478 107.942C145.973 107.993 144.546 108.631 143.09 109.993C142.033 110.903 141.293 111.407 140.188 111.426C139.25 111.447 138.312 111.08 138.415 110.325C138.501 109.668 139.079 109.102 139.487 108.757L136.906 108.473Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M96.2484 109.935C95.7898 110.314 95.3104 110.855 95.1641 111.581L92.6147 111.632L92.4673 112.741L95.2129 112.686C95.6296 113.87 97.3652 114.548 99.7242 114.497C102.154 114.449 103.51 113.641 104.763 112.522C105.864 111.465 106.711 111.075 107.935 111.047C109.14 111.022 110.026 111.4 109.917 112.213C109.824 112.925 109.205 113.603 108.592 114.058L111.245 114.343C111.83 113.901 112.408 113.155 112.556 112.429L115.298 112.375L115.445 111.266L112.509 111.328C112.15 110.061 110.275 109.353 107.82 109.404C105.319 109.455 103.888 110.091 102.434 111.454C101.38 112.368 100.64 112.868 99.5315 112.888C98.5935 112.909 97.6589 112.546 97.7588 111.786C97.8447 111.133 98.4263 110.567 98.8303 110.219L96.253 109.935H96.2484Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M62.1462 25.7828H169.274C172.823 25.7828 175.728 28.6886 175.728 32.241V93.7827C175.728 97.3316 172.823 100.237 169.274 100.237H62.1462C58.5961 100.237 55.688 97.3316 55.688 93.7827V32.241C55.688 28.6886 58.5973 25.7828 62.1462 25.7828Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66.3079 72.0701H82.0721C82.9578 72.0701 83.6881 72.7956 83.6881 73.6861V77.8654C83.6881 78.7523 82.9578 79.4814 82.0721 79.4814H66.3079C65.4175 79.4814 64.6919 78.7523 64.6919 77.8654V73.6861C64.6919 72.7956 65.4175 72.0701 66.3079 72.0701ZM149.346 72.0701H165.11C166.001 72.0701 166.726 72.7956 166.726 73.6861V77.8654C166.726 78.7523 166.001 79.4814 165.11 79.4814H149.346C148.456 79.4814 147.73 78.7523 147.73 77.8654V73.6861C147.73 72.7956 148.456 72.0701 149.346 72.0701ZM121.664 72.0701H137.432C138.319 72.0701 139.044 72.7956 139.044 73.6861V77.8654C139.044 78.7523 138.319 79.4814 137.432 79.4814H121.664C120.777 79.4814 120.052 78.7523 120.052 77.8654V73.6861C120.052 72.7956 120.777 72.0701 121.664 72.0701ZM93.9854 72.0701H109.751C110.641 72.0701 111.367 72.7956 111.367 73.6861V77.8654C111.367 78.7523 110.641 79.4814 109.751 79.4814H93.9854C93.0996 79.4814 92.3706 78.7523 92.3706 77.8654V73.6861C92.3706 72.7956 93.0996 72.0701 93.9854 72.0701Z"
            fill="#A3CFFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M65.7123 87.7483H118.835C119.397 87.7483 119.855 88.2069 119.855 88.7687V91.8556C119.855 92.4164 119.397 92.8761 118.835 92.8761H65.7123C65.1505 92.8761 64.6919 92.4175 64.6919 91.8556V88.7687C64.6919 88.208 65.1505 87.7483 65.7123 87.7483Z"
            fill="#A3CFFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M129.982 87.7483H151.867C152.428 87.7483 152.887 88.2069 152.887 88.7687V91.8556C152.887 92.4164 152.429 92.8761 151.867 92.8761H129.982C129.422 92.8761 128.962 92.4175 128.962 91.8556V88.7687C128.962 88.208 129.42 87.7483 129.982 87.7483Z"
            fill="#A3CFFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M130.503 34.5687H165.068C165.955 34.5687 166.68 35.0273 166.68 35.5892V38.6761C166.68 39.238 165.955 39.6965 165.068 39.6965H130.503C129.616 39.6965 128.89 39.238 128.89 38.6761V35.5892C128.89 35.0285 129.616 34.5687 130.503 34.5687Z"
            fill="#A3CFFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M66.02 42.6221H84.4473C85.1764 42.6221 85.7754 43.2176 85.7754 43.9502V58.9551C85.7754 59.6876 85.1764 60.2867 84.4473 60.2867H66.02C65.2909 60.2867 64.6919 59.6876 64.6919 58.9551V43.9502C64.6919 43.2176 65.2909 42.6221 66.02 42.6221Z"
            fill="#A3CFFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M69.4392 107.224C68.8912 107.382 68.3712 107.607 67.8882 107.885C67.3948 108.172 66.9397 108.514 66.5288 108.908C66.451 108.987 66.3303 108.998 66.2409 108.946L64.4031 107.885L64.3927 107.878C64.2905 107.82 64.1698 107.809 64.0607 107.84C63.9446 107.868 63.8447 107.943 63.7844 108.049L63.7739 108.063L62.4841 110.302C62.4226 110.407 62.4087 110.534 62.44 110.648C62.4702 110.76 62.5422 110.86 62.6513 110.925L62.6606 110.932L64.4844 111.983C64.5773 112.037 64.6214 112.151 64.597 112.25C64.532 112.524 64.4774 112.801 64.4438 113.088C64.4124 113.365 64.3915 113.65 64.3915 113.936C64.3915 114.223 64.4113 114.511 64.4438 114.789C64.4774 115.073 64.532 115.353 64.597 115.623C64.626 115.736 64.5703 115.85 64.467 115.897L62.6501 116.948V116.951C62.541 117.013 62.469 117.116 62.4388 117.225C62.4063 117.341 62.4203 117.464 62.483 117.575L63.7844 119.823C63.8459 119.934 63.9446 120.005 64.0607 120.036C64.1698 120.067 64.2975 120.053 64.4031 119.992L64.4171 119.985L66.2409 118.931C66.3372 118.876 66.4545 118.894 66.5288 118.964C66.9397 119.358 67.3948 119.704 67.8882 119.992C68.3746 120.269 68.8982 120.494 69.4497 120.652C69.5565 120.683 69.6238 120.782 69.6238 120.885V123.003C69.6238 123.13 69.6784 123.242 69.7608 123.325C69.8432 123.407 69.9558 123.458 70.0789 123.458H72.6805C72.8035 123.458 72.9173 123.407 73.0021 123.325C73.0845 123.242 73.1356 123.13 73.1356 123.003V120.885C73.1356 120.772 73.2134 120.672 73.3202 120.648C73.8693 120.49 74.3882 120.268 74.8712 119.991C75.3645 119.703 75.8196 119.358 76.2306 118.963C76.313 118.884 76.4384 118.874 76.5313 118.935L78.3562 119.989C78.4619 120.051 78.5884 120.065 78.701 120.034C78.8136 120.002 78.9135 119.931 78.975 119.821L78.9855 119.807L80.2752 117.569C80.3368 117.462 80.3507 117.339 80.3194 117.223C80.2892 117.11 80.2172 117.011 80.1104 116.949L78.2761 115.888C78.1798 115.833 78.1368 115.723 78.1601 115.621C78.2285 115.35 78.2796 115.069 78.3144 114.786C78.3481 114.509 78.3655 114.226 78.3655 113.934C78.3655 113.643 78.3481 113.363 78.3144 113.082C78.2796 112.798 78.2285 112.521 78.1601 112.247C78.1322 112.135 78.1879 112.021 78.2866 111.973L80.1104 110.923C80.2172 110.861 80.2892 110.758 80.3194 110.645C80.3507 110.533 80.3368 110.408 80.2752 110.299L80.2683 110.285L78.9785 108.047C78.9135 107.94 78.8136 107.866 78.701 107.838C78.5884 107.807 78.4619 107.817 78.3562 107.879V107.882L76.5173 108.94C76.4221 108.998 76.2979 108.977 76.2225 108.902C75.815 108.508 75.3634 108.165 74.87 107.881C74.3836 107.6 73.86 107.375 73.3097 107.217C73.2041 107.187 73.1356 107.09 73.1356 106.985V104.866C73.1356 104.743 73.0833 104.63 73.0021 104.548C72.9173 104.462 72.8035 104.415 72.6805 104.415H70.0789C69.9558 104.415 69.8432 104.466 69.7608 104.548C69.6784 104.63 69.6238 104.743 69.6238 104.866V106.985C69.6238 107.101 69.5448 107.197 69.4392 107.221V107.224ZM68.5871 111.143C69.3034 110.428 70.289 109.987 71.3803 109.987C72.4715 109.987 73.4583 110.428 74.1734 111.143C74.8886 111.858 75.3332 112.847 75.3332 113.936C75.3332 115.025 74.8886 116.017 74.1734 116.733C73.4583 117.448 72.4727 117.889 71.3803 117.889C70.2878 117.889 69.3034 117.448 68.5871 116.733C67.872 116.018 67.4308 115.029 67.4308 113.936C67.4308 112.844 67.872 111.858 68.5871 111.143Z"
            fill="#A3CFFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M143.761 13.3994C143.44 13.4923 143.134 13.6223 142.855 13.7825C142.567 13.9509 142.3 14.1517 142.061 14.3816C142.013 14.4257 141.944 14.4326 141.89 14.4025L140.818 13.7825L140.811 13.7756C140.75 13.7419 140.681 13.7384 140.616 13.7547C140.551 13.7721 140.493 13.8127 140.456 13.8789L140.448 13.8847L139.695 15.193C139.657 15.2534 139.65 15.3289 139.667 15.3939C139.688 15.4589 139.728 15.5216 139.793 15.5553L139.798 15.5622L140.865 16.1787C140.919 16.2089 140.944 16.2739 140.93 16.3319C140.893 16.4933 140.861 16.6535 140.84 16.8218C140.82 16.9832 140.809 17.1504 140.809 17.3175C140.809 17.4847 140.82 17.653 140.84 17.8167C140.861 17.9816 140.892 18.1453 140.93 18.3032C140.947 18.3682 140.912 18.4367 140.856 18.4645L139.793 19.081C139.728 19.1193 139.688 19.1773 139.667 19.2423C139.649 19.3074 139.656 19.3828 139.695 19.4443L140.455 20.7585C140.492 20.8235 140.55 20.8642 140.615 20.8816C140.68 20.9025 140.756 20.8955 140.817 20.8572L140.824 20.8502L141.892 20.2338C141.947 20.2024 142.015 20.2129 142.059 20.2547C142.299 20.4869 142.566 20.6854 142.853 20.8537C143.138 21.0174 143.442 21.1486 143.764 21.2403C143.829 21.2612 143.866 21.3157 143.866 21.3773V22.616C143.866 22.688 143.896 22.7565 143.945 22.8041C143.992 22.8516 144.061 22.883 144.133 22.883H145.652C145.724 22.883 145.789 22.8516 145.841 22.8041C145.888 22.7565 145.919 22.688 145.919 22.616V21.3773C145.919 21.3123 145.964 21.2542 146.025 21.2403C146.347 21.1474 146.652 21.0174 146.932 20.8537C147.22 20.6865 147.487 20.488 147.726 20.2547C147.773 20.2106 147.849 20.2036 147.903 20.2407L148.968 20.8537C149.03 20.8909 149.105 20.8978 149.17 20.8816C149.235 20.8642 149.293 20.82 149.33 20.7585L149.337 20.7515L150.091 19.4409C150.129 19.3793 150.135 19.3074 150.119 19.2389C150.098 19.1739 150.057 19.1158 149.995 19.0775L148.92 18.4576C148.866 18.4262 148.838 18.3612 148.855 18.3032C148.893 18.1418 148.925 17.9816 148.945 17.8133C148.966 17.6519 148.975 17.4847 148.975 17.3175C148.975 17.1504 148.965 16.982 148.945 16.8183C148.925 16.6535 148.894 16.4898 148.855 16.3319C148.838 16.2634 148.873 16.1984 148.931 16.1705L149.995 15.5541C150.057 15.5169 150.098 15.4577 150.119 15.3927C150.136 15.3277 150.129 15.2523 150.091 15.1919L150.087 15.1838L149.33 13.8777C149.293 13.8116 149.235 13.7709 149.17 13.7535C149.105 13.7326 149.03 13.7396 148.968 13.7779L147.893 14.3978C147.838 14.4315 147.767 14.4187 147.722 14.3734C147.486 14.1447 147.22 13.9462 146.932 13.7779C146.647 13.613 146.343 13.483 146.022 13.3913C145.96 13.3739 145.918 13.3158 145.918 13.2543V12.0156C145.918 11.9436 145.888 11.8786 145.839 11.831C145.788 11.7834 145.723 11.7521 145.651 11.7521H144.132C144.06 11.7521 143.991 11.7834 143.944 11.831C143.896 11.8786 143.865 11.9436 143.865 12.0156V13.2543C143.865 13.3228 143.821 13.3774 143.759 13.3948V13.3983L143.761 13.3994ZM143.262 15.6888C143.68 15.2673 144.258 15.0108 144.894 15.0108C145.531 15.0108 146.11 15.2673 146.527 15.6888C146.945 16.1067 147.205 16.6813 147.205 17.321C147.205 17.9607 146.945 18.5365 146.527 18.9533C146.109 19.3712 145.531 19.6313 144.894 19.6313C144.258 19.6313 143.679 19.3712 143.262 18.9533C142.845 18.5353 142.584 17.9572 142.584 17.321C142.584 16.6848 142.844 16.1055 143.262 15.6888Z"
            fill="#A3CFFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M171.914 105.793C164.738 112.251 161.924 122.713 165.64 132.238C169.37 141.803 178.584 147.604 188.279 147.45C170.67 145.567 160.312 124.918 173.951 111.015L175.15 114.089L181.109 103.102L170.825 103L171.914 105.792L171.914 105.793Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M173.371 109.528C166.72 116.518 165.931 125.276 168.955 132.634C166.411 125.725 167.481 117.611 173.95 111.015L173.371 109.528H173.371Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6003 92.9643C10.8647 92.9643 9.45886 91.5573 9.45886 89.8229C9.45886 88.0884 10.8647 86.6837 12.6003 86.6837C14.3359 86.6837 15.7394 88.0908 15.7394 89.8229C15.7394 91.555 14.3324 92.9643 12.6003 92.9643ZM21.5092 91.4923V88.2266H19.4753C19.3046 87.4836 19.0167 86.7859 18.6313 86.152L20.0825 84.7044L17.7722 82.3941L16.3338 83.8313C15.7046 83.4378 15.0104 83.1429 14.2709 82.9618V80.9116H11.0029V82.9444C10.2599 83.1151 9.56103 83.403 8.92832 83.7895L7.48065 82.3419L5.17042 84.6521L6.60764 86.0893C6.21409 86.7162 5.91921 87.4105 5.74275 88.15H3.69141V91.4191H5.72418C5.89483 92.1621 6.1839 92.8598 6.56585 93.4937L5.11818 94.9414L7.42841 97.2516L8.86679 95.8144C9.49717 96.2079 10.1879 96.5028 10.9298 96.6839V98.7341H14.1954V96.7013C14.9384 96.5272 15.6373 96.2393 16.27 95.8562L17.7177 97.3038L20.0279 94.9936L18.5907 93.5564C18.9842 92.9272 19.2826 92.2353 19.4602 91.4923H21.5104H21.5092Z"
            fill="#A3CFFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M162.456 17.0307C160.72 17.0307 159.317 15.6237 159.317 13.8893C159.317 12.1548 160.72 10.7501 162.456 10.7501C164.191 10.7501 165.597 12.1572 165.597 13.8893C165.597 15.6214 164.19 17.0307 162.456 17.0307ZM171.365 15.5587V12.293H169.332C169.161 11.55 168.873 10.8523 168.49 10.2184L169.938 8.77076L167.628 6.46052L166.19 7.89774C165.561 7.50419 164.866 7.20932 164.126 7.02822V4.97803H160.862V7.0108C160.119 7.18146 159.418 7.46936 158.787 7.85595L157.336 6.4048L155.026 8.71503L156.463 10.1523C156.073 10.7815 155.775 11.4769 155.597 12.2164H153.547V15.4855H155.58C155.75 16.2285 156.038 16.9262 156.425 17.5601L154.974 19.0078L157.285 21.318L158.721 19.8808C159.351 20.2709 160.046 20.5692 160.785 20.7468V22.797H164.054V20.7642C164.797 20.5936 165.495 20.3057 166.129 19.9226L167.577 21.3702L169.887 19.06L168.45 17.6228C168.84 16.9936 169.137 16.2982 169.316 15.5587H171.366H171.365Z"
            fill="#A3CFFB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.5235 148.764C17.7025 147.771 17.4738 146.317 15.9541 145.605C14.4206 144.89 14.2464 143.616 15.7452 142.234C16.8504 143.117 18.2237 144.202 18.9482 143.627C19.4334 143.244 21.0808 143.268 21.4047 143.829C22.8396 147.162 24.8352 146.105 25.2287 147.62C25.2729 149.64 21.8191 149.219 20.5224 148.764H20.5235Z"
            fill="#163560"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M44.759 148.866C39.5499 148.78 35.655 148.719 33.8567 148.151C31.9168 147.538 32.3174 146.354 33.433 144.462C38.3414 146.721 37.033 143.996 39.3305 144.342C40.9418 145.642 43.3345 146.512 46.4969 146.953C47.8377 147.942 47.2944 148.822 44.759 148.866Z"
            fill="#163560"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.7568 22.4383C27.5881 22.4964 28.9034 22.3362 29.1356 22.0413C30.019 20.9187 30.632 19.745 30.8607 19.0055C30.6854 18.5156 30.5043 17.8933 30.3162 17.1434C27.1132 14.9666 26.6756 13.3541 29.0021 12.3104C29.4722 12.574 30.0573 13.3855 30.7516 14.7437C31.3053 14.7194 31.7302 14.4361 32.0135 13.8881C31.3529 11.5988 30.9222 9.73669 30.7237 8.30527C32.3014 5.95672 35.9978 5.62238 40.8887 6.25508C41.1151 7.55531 41.2997 8.93449 41.4471 10.3926C42.3132 11.1902 42.1994 14.1435 41.403 17.5462C41.8001 19.4838 40.6055 20.5414 37.8158 20.7155C37.7786 21.404 37.8402 22.2456 37.8843 22.3408C37.9562 22.4883 38.2024 22.6322 38.5448 22.7553C38.6412 25.949 34.7115 25.8422 26.7568 22.4372V22.4383Z"
            fill="#FFB27D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M40.8883 6.25615C35.9974 5.62344 32.301 5.95895 30.7233 8.30633C30.9218 9.73659 31.3525 11.5987 32.0131 13.8915C31.7298 14.436 31.3038 14.7193 30.7512 14.7436C30.0569 13.3854 29.4718 12.5739 29.0017 12.3104C26.6752 13.354 27.1128 14.9665 30.3158 17.1433C30.505 17.8932 30.6862 18.5155 30.8603 19.0054C27.9754 18.3622 25.5618 15.7815 25.2229 14.6659C21.8585 8.03584 25.6094 5.23337 27.619 4.21292C28.5059 -2.35209 38.0371 3.4502 42.8155 0.283203C44.7147 2.90805 42.3673 6.19694 40.8895 6.25615H40.8883Z"
            fill="#22407A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M70.2401 34.0684C67.8208 44.432 63.5707 52.4748 57.4839 58.1982C55.2933 57.5306 53.3464 56.0354 51.648 53.7008C51.7409 61.1991 51.5516 68.6616 51.0896 76.088C46.6479 78.1927 40.7551 78.0557 33.4053 75.677L30.424 72.0085C29.6566 71.8576 27.9187 72.7027 27.084 73.9937C20.1057 68.6685 15.3994 62.9417 12.6201 57.2543C13.3701 45.0356 15.029 35.3942 17.6005 28.33C18.9007 26.3309 21.9504 24.3701 26.7555 22.4395C34.7101 25.8444 38.6387 25.9512 38.5435 22.7575C40.8851 23.5238 43.9859 24.8832 47.8529 26.8301C51.0768 29.2808 53.8224 35.9166 56.0908 46.7457C59.7802 42.1217 63.6101 37.2203 67.5747 32.0391C68.4581 32.2887 69.3474 32.9667 70.2413 34.0684H70.2401ZM28.8173 68.6952C31.131 61.0865 29.854 51.6982 24.9839 40.5336C23.758 46.041 22.4322 51.4625 21.0124 56.7981C22.6656 57.5852 25.2672 61.5521 28.8161 68.6952H28.8173Z"
            fill="#699DEE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.9514 78.6142C29.081 78.5248 30.899 77.5461 33.4066 75.677C40.7552 78.0558 46.6492 78.1928 51.0909 76.088C51.878 88.5877 48.8085 101.692 44.9067 116.3C41.0907 122.711 41.2509 127.218 39.2193 142.014C38.0898 142.822 36.2207 142.706 33.6156 141.665C32.7901 129.049 33.3625 120.698 36.634 115.989C36.1208 111.758 37.4594 101.361 37.5244 94.8334C35.1422 100.142 33.5064 107.316 30.4056 114.557C26.628 123.375 23.995 132.814 22.0029 141.425C19.8946 141.832 17.9199 141.592 16.0752 140.699C18.1904 126.55 20.5378 116.81 23.1115 111.483C23.0129 97.5674 24.3363 85.0712 27.0854 73.9926C27.5985 75.2998 27.8864 76.8403 27.9514 78.613V78.6142Z"
            fill="#22407A"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.4062 75.6769C30.8986 77.5459 29.0794 78.5246 27.951 78.614C27.886 76.8413 27.5981 75.3007 27.085 73.9935C27.9197 72.7037 29.6587 71.8574 30.4249 72.0083L33.4062 75.6769Z"
            fill="#FFB27D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M51.6492 53.7007C51.4101 46.4206 50.825 40.4523 49.9009 35.797C52.2564 45.6846 54.5388 52.2461 56.7468 55.4839C58.1423 55.4398 59.9127 54.6109 62.0511 52.9995C60.6649 54.9058 59.1453 56.6379 57.4852 58.1981C55.2945 57.5306 53.3477 56.0353 51.6492 53.7007Z"
            fill="#4A75CB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M30.4251 72.0085C29.9967 70.9509 29.4604 69.8457 28.8173 68.6952C31.131 61.0865 29.854 51.6982 24.9839 40.5336C32.0643 50.5999 34.0739 61.3326 31.0102 72.7271L30.4251 72.0085Z"
            fill="#4A75CB"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M34.6011 20.0422C35.3859 20.4288 36.4562 20.6552 37.8145 20.7167C37.7901 21.1788 37.8075 21.7093 37.8389 22.0379C36.4702 21.7743 35.3917 21.1103 34.6011 20.0422Z"
            fill="#F08261"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M33.9229 144.681C34.1864 143.818 34.2862 142.891 34.2212 141.895C36.2087 142.61 37.7261 142.733 38.7697 142.271C38.7186 143.007 38.8011 143.688 39.0228 144.314C37.2152 144.249 38.0407 146.44 33.9229 144.681ZM20.794 143.459C20.1683 143.29 19.286 143.362 18.9493 143.626C18.3004 144.142 17.1325 143.329 16.1016 142.517C16.2792 142.031 16.4266 141.493 16.5427 140.911C17.7849 141.432 19.0816 141.665 20.4411 141.609C20.4214 142.349 20.5409 142.965 20.794 143.457V143.459Z"
            fill="#FFB27D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M27.8791 80.3903C27.958 79.7472 27.9813 79.1551 27.9511 78.6141C29.0806 78.5247 30.8986 77.5461 33.4062 75.677C34.0018 75.872 34.5869 76.0497 35.1616 76.211C33.3993 78.0488 30.9695 79.4384 27.8779 80.3903H27.8791Z"
            fill="#473D9E"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M70.2404 34.0684C70.3878 33.6992 70.9857 32.5487 71.5708 31.108C73.0266 30.3581 74.1863 28.7293 75.0524 26.2136C74.5323 24.5267 73.4364 23.4691 71.7635 23.0477C71.1993 25.1351 70.353 26.6652 69.2315 27.6473C69.5078 25.4706 69.1526 24.7891 68.1565 25.6006C68.2935 25.8781 68.3005 26.2298 68.1762 26.6547C67.5029 27.7564 67.5644 29.0091 68.3574 30.4126C68.0532 31.0488 67.7247 31.6896 67.5737 32.0379C68.4804 32.3293 69.3221 32.9585 70.2404 34.0672V34.0684Z"
            fill="#FFB27D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74.6622 0C82.5855 0 89.0066 6.42454 89.0066 14.3444C89.0066 22.2642 82.5867 28.6887 74.6622 28.6887C66.7378 28.6887 60.3179 22.2676 60.3179 14.3444C60.3179 6.42106 66.7389 0 74.6622 0Z"
            fill="#619FDF"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74.6621 2.11169C81.4187 2.11169 86.8948 7.58776 86.8948 14.3443C86.8948 21.1009 81.4187 26.577 74.6621 26.577C67.9056 26.577 62.4307 21.1009 62.4307 14.3443C62.4307 7.58776 67.9067 2.11169 74.6621 2.11169Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M74.6619 2.95679C80.9518 2.95679 86.0517 8.05672 86.0517 14.3443C86.0517 20.6318 80.9518 25.7352 74.6619 25.7352C68.372 25.7352 63.2744 20.6353 63.2744 14.3443C63.2744 8.05324 68.3709 2.95679 74.6619 2.95679Z"
            fill="#BADAF9"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M78.1265 8.47128C77.5414 8.1706 76.7137 7.87224 75.5806 7.83509V5.96252H73.852V7.97788C71.9759 8.3993 70.8638 9.74365 70.8638 11.4757C70.8638 13.2078 72.0816 14.176 73.7963 14.991C75.4227 15.6957 76.0043 16.2808 76.0043 17.1817C76.0043 18.0826 75.389 18.7524 74.1155 18.7524C73.0034 18.7524 71.9597 18.3658 71.2713 17.9583L70.7407 19.9365C71.4117 20.3266 72.5611 20.6795 73.6906 20.7132V22.7286H75.4227V20.5727C77.4183 20.1827 78.5851 18.735 78.5851 16.9344C78.5851 15.1338 77.6296 14.1076 75.5458 13.1695C74.1492 12.4811 73.3899 11.9854 73.3899 11.1739C73.3899 10.482 73.9925 9.7599 75.1766 9.7599C76.2005 9.7599 77.0654 10.1291 77.596 10.3961L78.1265 8.46895V8.47128Z"
            fill="white"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M69.2312 27.6474C69.5075 25.4706 69.1522 24.7892 68.1562 25.6007C68.2931 25.8781 68.3001 26.2299 68.1759 26.6548C67.6999 27.4314 67.5908 28.287 67.8474 29.2146C68.3779 29.0509 68.8399 28.5262 69.2312 27.6474Z"
            fill="#FCB88D"
          />
        </svg>
      </DebitTile>
    );
  }
}

export default DashboardDebitCard;
