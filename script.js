const { default: axios } = require('axios')

const APIs = [
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-token',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-nft',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-referral',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-busd-vault',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bnb-vault',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-01',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-02',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-bond-03',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-public-sale',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/nft-reward-pool',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/position-staking-pool',
  'https://api.thegraph.com/subgraphs/name/gafranslotteria/derivatives'
]

const script = async () => {
  try {
    APIs.forEach(async api => {
      const res = await axios.post(api, {
        query: `
          {
            _meta {
              block {
                number
              }
            }
          }
        `
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(res.data?.data._meta.block.number + ':' + api)
    })
  } catch (error) {
    console.log(error)
  }
}

script()
