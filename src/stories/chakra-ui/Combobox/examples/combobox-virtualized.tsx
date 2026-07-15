'use client'

import { Combobox, Portal, useFilter, useListCollection } from '@chakra-ui/react'
import { useVirtualizer } from '@tanstack/react-virtual'
import { useRef } from 'react'
import { flushSync } from 'react-dom'

export const ComboboxVirtualized = () => {
  const contentRef = useRef<HTMLDivElement | null>(null)

  const { startsWith } = useFilter({ sensitivity: 'base' })

  const { collection, filter, reset } = useListCollection({
    filter: startsWith,
    initialItems: items,
  })

  const virtualizer = useVirtualizer({
    count: collection.size,
    estimateSize: () => 28,
    getScrollElement: () => contentRef.current,
    overscan: 10,
    scrollPaddingEnd: 32,
  })

  const handleScrollToIndexFn = (details: { index: number }) => {
    flushSync(() => {
      virtualizer.scrollToIndex(details.index, {
        align: 'center',
        behavior: 'auto',
      })
    })
  }

  return (
    <Combobox.Root
      collection={collection}
      onInputValueChange={(e) => filter(e.inputValue)}
      scrollToIndexFn={handleScrollToIndexFn}
      width="320px"
    >
      <Combobox.Label>Select framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input placeholder="Type to search" />
        <Combobox.IndicatorGroup>
          <Combobox.ClearTrigger />
          <Combobox.Trigger onClick={reset} />
        </Combobox.IndicatorGroup>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content ref={contentRef}>
            <div
              style={{
                height: `${virtualizer.getTotalSize()}px`,
                position: 'relative',
                width: '100%',
              }}
            >
              {virtualizer.getVirtualItems().map((virtualItem) => {
                const item = collection.items[virtualItem.index]
                return (
                  <Combobox.Item
                    item={item}
                    key={item.value}
                    style={{
                      height: `${virtualItem.size}px`,
                      left: 0,
                      overflow: 'hidden',
                      position: 'absolute',
                      textOverflow: 'ellipsis',
                      top: 0,
                      transform: `translateY(${virtualItem.start}px)`,
                      whiteSpace: 'nowrap',
                      width: '100%',
                    }}
                  >
                    <Combobox.ItemText truncate>
                      <span aria-hidden style={{ marginRight: 4 }}>
                        {item.emoji}
                      </span>
                      {item.label}
                    </Combobox.ItemText>
                    <Combobox.ItemIndicator />
                  </Combobox.Item>
                )
              })}
            </div>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  )
}

export const items = [
  { emoji: '🇦🇩', label: 'Andorra', value: 'AD' },
  { emoji: '🇦🇪', label: 'United Arab Emirates', value: 'AE' },
  { emoji: '🇦🇫', label: 'Afghanistan', value: 'AF' },
  { emoji: '🇦🇬', label: 'Antigua and Barbuda', value: 'AG' },
  { emoji: '🇦🇮', label: 'Anguilla', value: 'AI' },
  { emoji: '🇦🇱', label: 'Albania', value: 'AL' },
  { emoji: '🇦🇲', label: 'Armenia', value: 'AM' },
  { emoji: '🇦🇴', label: 'Angola', value: 'AO' },
  { emoji: '🇦🇶', label: 'Antarctica', value: 'AQ' },
  { emoji: '🇦🇷', label: 'Argentina', value: 'AR' },
  { emoji: '🇦🇸', label: 'American Samoa', value: 'AS' },
  { emoji: '🇦🇹', label: 'Austria', value: 'AT' },
  { emoji: '🇦🇺', label: 'Australia', value: 'AU' },
  { emoji: '🇦🇼', label: 'Aruba', value: 'AW' },
  { emoji: '🇦🇽', label: 'Åland Islands', value: 'AX' },
  { emoji: '🇦🇿', label: 'Azerbaijan', value: 'AZ' },
  { emoji: '🇧🇦', label: 'Bosnia and Herzegovina', value: 'BA' },
  { emoji: '🇧🇧', label: 'Barbados', value: 'BB' },
  { emoji: '🇧🇩', label: 'Bangladesh', value: 'BD' },
  { emoji: '🇧🇪', label: 'Belgium', value: 'BE' },
  { emoji: '🇧🇫', label: 'Burkina Faso', value: 'BF' },
  { emoji: '🇧🇬', label: 'Bulgaria', value: 'BG' },
  { emoji: '🇧🇭', label: 'Bahrain', value: 'BH' },
  { emoji: '🇧🇮', label: 'Burundi', value: 'BI' },
  { emoji: '🇧🇯', label: 'Benin', value: 'BJ' },
  { emoji: '🇧🇱', label: 'Saint Barthélemy', value: 'BL' },
  { emoji: '🇧🇲', label: 'Bermuda', value: 'BM' },
  { emoji: '🇧🇳', label: 'Brunei Darussalam', value: 'BN' },
  { emoji: '🇧🇴', label: 'Bolivia, Plurinational State of', value: 'BO' },
  { emoji: '🇧🇶', label: 'Bonaire, Sint Eustatius and Saba', value: 'BQ' },
  { emoji: '🇧🇷', label: 'Brazil', value: 'BR' },
  { emoji: '🇧🇸', label: 'Bahamas', value: 'BS' },
  { emoji: '🇧🇹', label: 'Bhutan', value: 'BT' },
  { emoji: '🇧🇻', label: 'Bouvet Island', value: 'BV' },
  { emoji: '🇧🇼', label: 'Botswana', value: 'BW' },
  { emoji: '🇧🇾', label: 'Belarus', value: 'BY' },
  { emoji: '🇧🇿', label: 'Belize', value: 'BZ' },
  { emoji: '🇨🇦', label: 'Canada', value: 'CA' },
  { emoji: '🇨🇨', label: 'Cocos (Keeling) Islands', value: 'CC' },
  { emoji: '🇨🇩', label: 'Congo, Democratic Republic of the', value: 'CD' },
  { emoji: '🇨🇫', label: 'Central African Republic', value: 'CF' },
  { emoji: '🇨🇬', label: 'Congo', value: 'CG' },
  { emoji: '🇨🇭', label: 'Switzerland', value: 'CH' },
  { emoji: '🇨🇮', label: "Côte d'Ivoire", value: 'CI' },
  { emoji: '🇨🇰', label: 'Cook Islands', value: 'CK' },
  { emoji: '🇨🇱', label: 'Chile', value: 'CL' },
  { emoji: '🇨🇲', label: 'Cameroon', value: 'CM' },
  { emoji: '🇨🇳', label: 'China', value: 'CN' },
  { emoji: '🇨🇴', label: 'Colombia', value: 'CO' },
  { emoji: '🇨🇷', label: 'Costa Rica', value: 'CR' },
  { emoji: '🇨🇺', label: 'Cuba', value: 'CU' },
  { emoji: '🇨🇻', label: 'Cabo Verde', value: 'CV' },
  { emoji: '🇨🇼', label: 'Curaçao', value: 'CW' },
  { emoji: '🇨🇽', label: 'Christmas Island', value: 'CX' },
  { emoji: '🇨🇾', label: 'Cyprus', value: 'CY' },
  { emoji: '🇨🇿', label: 'Czechia', value: 'CZ' },
  { emoji: '🇩🇪', label: 'Germany', value: 'DE' },
  { emoji: '🇩🇯', label: 'Djibouti', value: 'DJ' },
  { emoji: '🇩🇰', label: 'Denmark', value: 'DK' },
  { emoji: '🇩🇲', label: 'Dominica', value: 'DM' },
  { emoji: '🇩🇴', label: 'Dominican Republic', value: 'DO' },
  { emoji: '🇩🇿', label: 'Algeria', value: 'DZ' },
  { emoji: '🇪🇨', label: 'Ecuador', value: 'EC' },
  { emoji: '🇪🇪', label: 'Estonia', value: 'EE' },
  { emoji: '🇪🇬', label: 'Egypt', value: 'EG' },
  { emoji: '🇪🇭', label: 'Western Sahara', value: 'EH' },
  { emoji: '🇪🇷', label: 'Eritrea', value: 'ER' },
  { emoji: '🇪🇸', label: 'Spain', value: 'ES' },
  { emoji: '🇪🇹', label: 'Ethiopia', value: 'ET' },
  { emoji: '🇫🇮', label: 'Finland', value: 'FI' },
  { emoji: '🇫🇯', label: 'Fiji', value: 'FJ' },
  { emoji: '🇫🇰', label: 'Falkland Islands (Malvinas)', value: 'FK' },
  { emoji: '🇫🇲', label: 'Micronesia, Federated States of', value: 'FM' },
  { emoji: '🇫🇴', label: 'Faroe Islands', value: 'FO' },
  { emoji: '🇫🇷', label: 'France', value: 'FR' },
  { emoji: '🇬🇦', label: 'Gabon', value: 'GA' },
  {
    emoji: '🇬🇧',
    label: 'United Kingdom of Great Britain and Northern Ireland',
    value: 'GB',
  },
  { emoji: '🇬🇩', label: 'Grenada', value: 'GD' },
  { emoji: '🇬🇪', label: 'Georgia', value: 'GE' },
  { emoji: '🇬🇫', label: 'French Guiana', value: 'GF' },
  { emoji: '🇬🇬', label: 'Guernsey', value: 'GG' },
  { emoji: '🇬🇭', label: 'Ghana', value: 'GH' },
  { emoji: '🇬🇮', label: 'Gibraltar', value: 'GI' },
  { emoji: '🇬🇱', label: 'Greenland', value: 'GL' },
  { emoji: '🇬🇲', label: 'Gambia', value: 'GM' },
  { emoji: '🇬🇳', label: 'Guinea', value: 'GN' },
  { emoji: '🇬🇵', label: 'Guadeloupe', value: 'GP' },
  { emoji: '🇬🇶', label: 'Equatorial Guinea', value: 'GQ' },
  { emoji: '🇬🇷', label: 'Greece', value: 'GR' },
  {
    emoji: '🇬🇸',
    label: 'South Georgia and the South Sandwich Islands',
    value: 'GS',
  },
  { emoji: '🇬🇹', label: 'Guatemala', value: 'GT' },
  { emoji: '🇬🇺', label: 'Guam', value: 'GU' },
  { emoji: '🇬🇼', label: 'Guinea-Bissau', value: 'GW' },
  { emoji: '🇬🇾', label: 'Guyana', value: 'GY' },
  { emoji: '🇭🇰', label: 'Hong Kong', value: 'HK' },
  { emoji: '🇭🇲', label: 'Heard Island and McDonald Islands', value: 'HM' },
  { emoji: '🇭🇳', label: 'Honduras', value: 'HN' },
  { emoji: '🇭🇷', label: 'Croatia', value: 'HR' },
  { emoji: '🇭🇹', label: 'Haiti', value: 'HT' },
  { emoji: '🇭🇺', label: 'Hungary', value: 'HU' },
  { emoji: '🇮🇩', label: 'Indonesia', value: 'ID' },
  { emoji: '🇮🇪', label: 'Ireland', value: 'IE' },
  { emoji: '🇮🇱', label: 'Israel', value: 'IL' },
  { emoji: '🇮🇲', label: 'Isle of Man', value: 'IM' },
  { emoji: '🇮🇳', label: 'India', value: 'IN' },
  { emoji: '🇮🇴', label: 'British Indian Ocean Territory', value: 'IO' },
  { emoji: '🇮🇶', label: 'Iraq', value: 'IQ' },
  { emoji: '🇮🇷', label: 'Iran, Islamic Republic of', value: 'IR' },
  { emoji: '🇮🇸', label: 'Iceland', value: 'IS' },
  { emoji: '🇮🇹', label: 'Italy', value: 'IT' },
  { emoji: '🇯🇪', label: 'Jersey', value: 'JE' },
  { emoji: '🇯🇲', label: 'Jamaica', value: 'JM' },
  { emoji: '🇯🇴', label: 'Jordan', value: 'JO' },
  { emoji: '🇯🇵', label: 'Japan', value: 'JP' },
  { emoji: '🇰🇪', label: 'Kenya', value: 'KE' },
  { emoji: '🇰🇬', label: 'Kyrgyzstan', value: 'KG' },
  { emoji: '🇰🇭', label: 'Cambodia', value: 'KH' },
  { emoji: '🇰🇮', label: 'Kiribati', value: 'KI' },
  { emoji: '🇰🇲', label: 'Comoros', value: 'KM' },
  { emoji: '🇰🇳', label: 'Saint Kitts and Nevis', value: 'KN' },
  { emoji: '🇰🇵', label: "Korea, Democratic People's Republic of", value: 'KP' },
  { emoji: '🇰🇷', label: 'Korea, Republic of', value: 'KR' },
  { emoji: '🇰🇼', label: 'Kuwait', value: 'KW' },
  { emoji: '🇰🇾', label: 'Cayman Islands', value: 'KY' },
  { emoji: '🇰🇿', label: 'Kazakhstan', value: 'KZ' },
  { emoji: '🇱🇦', label: "Lao People's Democratic Republic", value: 'LA' },
  { emoji: '🇱🇧', label: 'Lebanon', value: 'LB' },
  { emoji: '🇱🇨', label: 'Saint Lucia', value: 'LC' },
  { emoji: '🇱🇮', label: 'Liechtenstein', value: 'LI' },
  { emoji: '🇱🇰', label: 'Sri Lanka', value: 'LK' },
  { emoji: '🇱🇷', label: 'Liberia', value: 'LR' },
  { emoji: '🇱🇸', label: 'Lesotho', value: 'LS' },
  { emoji: '🇱🇹', label: 'Lithuania', value: 'LT' },
  { emoji: '🇱🇺', label: 'Luxembourg', value: 'LU' },
  { emoji: '🇱🇻', label: 'Latvia', value: 'LV' },
  { emoji: '🇱🇾', label: 'Libya', value: 'LY' },
  { emoji: '🇲🇦', label: 'Morocco', value: 'MA' },
  { emoji: '🇲🇨', label: 'Monaco', value: 'MC' },
  { emoji: '🇲🇩', label: 'Moldova, Republic of', value: 'MD' },
  { emoji: '🇲🇪', label: 'Montenegro', value: 'ME' },
  { emoji: '🇲🇫', label: 'Saint Martin, (French part)', value: 'MF' },
  { emoji: '🇲🇬', label: 'Madagascar', value: 'MG' },
  { emoji: '🇲🇭', label: 'Marshall Islands', value: 'MH' },
  { emoji: '🇲🇰', label: 'North Macedonia', value: 'MK' },
  { emoji: '🇲🇱', label: 'Mali', value: 'ML' },
  { emoji: '🇲🇲', label: 'Myanmar', value: 'MM' },
  { emoji: '🇲🇳', label: 'Mongolia', value: 'MN' },
  { emoji: '🇲🇴', label: 'Macao', value: 'MO' },
  { emoji: '🇲🇵', label: 'Northern Mariana Islands', value: 'MP' },
  { emoji: '🇲🇶', label: 'Martinique', value: 'MQ' },
  { emoji: '🇲🇷', label: 'Mauritania', value: 'MR' },
  { emoji: '🇲🇸', label: 'Montserrat', value: 'MS' },
  { emoji: '🇲🇹', label: 'Malta', value: 'MT' },
  { emoji: '🇲🇺', label: 'Mauritius', value: 'MU' },
  { emoji: '🇲🇻', label: 'Maldives', value: 'MV' },
  { emoji: '🇲🇼', label: 'Malawi', value: 'MW' },
  { emoji: '🇲🇽', label: 'Mexico', value: 'MX' },
  { emoji: '🇲🇾', label: 'Malaysia', value: 'MY' },
  { emoji: '🇲🇿', label: 'Mozambique', value: 'MZ' },
  { emoji: '🇳🇦', label: 'Namibia', value: 'NA' },
  { emoji: '🇳🇨', label: 'New Caledonia', value: 'NC' },
  { emoji: '🇳🇪', label: 'Niger', value: 'NE' },
  { emoji: '🇳🇫', label: 'Norfolk Island', value: 'NF' },
  { emoji: '🇳🇬', label: 'Nigeria', value: 'NG' },
  { emoji: '🇳🇮', label: 'Nicaragua', value: 'NI' },
  { emoji: '🇳🇱', label: 'Netherlands', value: 'NL' },
  { emoji: '🇳🇴', label: 'Norway', value: 'NO' },
  { emoji: '🇳🇵', label: 'Nepal', value: 'NP' },
  { emoji: '🇳🇷', label: 'Nauru', value: 'NR' },
  { emoji: '🇳🇺', label: 'Niue', value: 'NU' },
  { emoji: '🇳🇿', label: 'New Zealand', value: 'NZ' },
  { emoji: '🇴🇲', label: 'Oman', value: 'OM' },
  { emoji: '🇵🇦', label: 'Panama', value: 'PA' },
  { emoji: '🇵🇪', label: 'Peru', value: 'PE' },
  { emoji: '🇵🇫', label: 'French Polynesia', value: 'PF' },
  { emoji: '🇵🇬', label: 'Papua New Guinea', value: 'PG' },
  { emoji: '🇵🇭', label: 'Philippines', value: 'PH' },
  { emoji: '🇵🇰', label: 'Pakistan', value: 'PK' },
  { emoji: '🇵🇱', label: 'Poland', value: 'PL' },
  { emoji: '🇵🇲', label: 'Saint Pierre and Miquelon', value: 'PM' },
  { emoji: '🇵🇳', label: 'Pitcairn', value: 'PN' },
  { emoji: '🇵🇷', label: 'Puerto Rico', value: 'PR' },
  { emoji: '🇵🇸', label: 'Palestine, State of', value: 'PS' },
  { emoji: '🇵🇹', label: 'Portugal', value: 'PT' },
  { emoji: '🇵🇼', label: 'Palau', value: 'PW' },
  { emoji: '🇵🇾', label: 'Paraguay', value: 'PY' },
  { emoji: '🇶🇦', label: 'Qatar', value: 'QA' },
  { emoji: '🇷🇪', label: 'Réunion', value: 'RE' },
  { emoji: '🇷🇴', label: 'Romania', value: 'RO' },
  { emoji: '🇷🇸', label: 'Serbia', value: 'RS' },
  { emoji: '🇷🇺', label: 'Russian Federation', value: 'RU' },
  { emoji: '🇷🇼', label: 'Rwanda', value: 'RW' },
  { emoji: '🇸🇦', label: 'Saudi Arabia', value: 'SA' },
  { emoji: '🇸🇧', label: 'Solomon Islands', value: 'SB' },
  { emoji: '🇸🇨', label: 'Seychelles', value: 'SC' },
  { emoji: '🇸🇩', label: 'Sudan', value: 'SD' },
  { emoji: '🇸🇪', label: 'Sweden', value: 'SE' },
  { emoji: '🇸🇬', label: 'Singapore', value: 'SG' },
  {
    emoji: '🇸🇭',
    label: 'Saint Helena, Ascension and Tristan da Cunha',
    value: 'SH',
  },
  { emoji: '🇸🇮', label: 'Slovenia', value: 'SI' },
  { emoji: '🇸🇯', label: 'Svalbard and Jan Mayen', value: 'SJ' },
  { emoji: '🇸🇰', label: 'Slovakia', value: 'SK' },
  { emoji: '🇸🇱', label: 'Sierra Leone', value: 'SL' },
  { emoji: '🇸🇲', label: 'San Marino', value: 'SM' },
  { emoji: '🇸🇳', label: 'Senegal', value: 'SN' },
  { emoji: '🇸🇴', label: 'Somalia', value: 'SO' },
  { emoji: '🇸🇷', label: 'Suriname', value: 'SR' },
  { emoji: '🇸🇸', label: 'South Sudan', value: 'SS' },
  { emoji: '🇸🇹', label: 'Sao Tome and Principe', value: 'ST' },
  { emoji: '🇸🇻', label: 'El Salvador', value: 'SV' },
  { emoji: '🇸🇽', label: 'Sint Maarten, (Dutch part)', value: 'SX' },
  { emoji: '🇸🇾', label: 'Syrian Arab Republic', value: 'SY' },
  { emoji: '🇸🇿', label: 'Eswatini', value: 'SZ' },
  { emoji: '🇹🇨', label: 'Turks and Caicos Islands', value: 'TC' },
  { emoji: '🇹🇩', label: 'Chad', value: 'TD' },
  { emoji: '🇹🇫', label: 'French Southern Territories', value: 'TF' },
  { emoji: '🇹🇬', label: 'Togo', value: 'TG' },
  { emoji: '🇹🇭', label: 'Thailand', value: 'TH' },
  { emoji: '🇹🇯', label: 'Tajikistan', value: 'TJ' },
  { emoji: '🇹🇰', label: 'Tokelau', value: 'TK' },
  { emoji: '🇹🇱', label: 'Timor-Leste', value: 'TL' },
  { emoji: '🇹🇲', label: 'Turkmenistan', value: 'TM' },
  { emoji: '🇹🇳', label: 'Tunisia', value: 'TN' },
  { emoji: '🇹🇴', label: 'Tonga', value: 'TO' },
  { emoji: '🇹🇷', label: 'Türkiye', value: 'TR' },
  { emoji: '🇹🇹', label: 'Trinidad and Tobago', value: 'TT' },
  { emoji: '🇹🇻', label: 'Tuvalu', value: 'TV' },
  { emoji: '🇹🇼', label: 'Taiwan, Province of China', value: 'TW' },
  { emoji: '🇹🇿', label: 'Tanzania, United Republic of', value: 'TZ' },
  { emoji: '🇺🇦', label: 'Ukraine', value: 'UA' },
  { emoji: '🇺🇬', label: 'Uganda', value: 'UG' },
  { emoji: '🇺🇲', label: 'United States Minor Outlying Islands', value: 'UM' },
  { emoji: '🇺🇸', label: 'United States of America', value: 'US' },
  { emoji: '🇺🇾', label: 'Uruguay', value: 'UY' },
  { emoji: '🇺🇿', label: 'Uzbekistan', value: 'UZ' },
  { emoji: '🇻🇦', label: 'Holy See', value: 'VA' },
  { emoji: '🇻🇨', label: 'Saint Vincent and the Grenadines', value: 'VC' },
  { emoji: '🇻🇪', label: 'Venezuela, Bolivarian Republic of', value: 'VE' },
  { emoji: '🇻🇬', label: 'Virgin Islands, British', value: 'VG' },
  { emoji: '🇻🇮', label: 'Virgin Islands, U.S.', value: 'VI' },
  { emoji: '🇻🇳', label: 'Viet Nam', value: 'VN' },
  { emoji: '🇻🇺', label: 'Vanuatu', value: 'VU' },
  { emoji: '🇼🇫', label: 'Wallis and Futuna', value: 'WF' },
  { emoji: '🇼🇸', label: 'Samoa', value: 'WS' },
  { emoji: '🇾🇪', label: 'Yemen', value: 'YE' },
  { emoji: '🇾🇹', label: 'Mayotte', value: 'YT' },
  { emoji: '🇿🇦', label: 'South Africa', value: 'ZA' },
  { emoji: '🇿🇲', label: 'Zambia', value: 'ZM' },
  { emoji: '🇿🇼', label: 'Zimbabwe', value: 'ZW' },
]
