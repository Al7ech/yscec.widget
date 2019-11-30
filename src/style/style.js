import { css } from 'uebersicht'

export const app = css`

    padding: 10px;
    width: 100%;
    overflow: auto;
    text-shadow:
    -1px 1px 1px #666,
    -1px -1px 1px #666,
    1px -1px 1px #666,
    1px 1px 1px #666;
    color: #FFF;
    a {
        color:#FFF;
    }
`

export const header = css`
    #title a img {
        -webkit-filter:
        drop-shadow(1px 1px 1px #777);
    }
    #title {
        display: inline-block;
        padding:10px 10px 20px 10px;
        white-space:pre;
        display: flex;

        span {
            align-self: flex-end;
            margin: 0px 0px -4.5px 0px;
            color:#FFF;
        }
    }
    
`

export const subjectItem = css`
    #subject-title {
        display: block;
        padding-bottom: 5px;
        margin: 0px -10px 10px -10px;
        text-align: center;
        color: #FFF;
        border-bottom: 1px solid #FFF;
        box-shadow: 
        0 2px 2px -2px #777,
        inset 0 -2px 2px -2px #777;
    }
`

export const noticeList = css`
    .more-notices {
        opacity:0.6;
        font-size: 10px;
        display: flex;
        white-space:pre;
        align-items: center;
        justify-content: center;
        padding: 0px 10px 0px 0px;
    }
`

export const noticeItem = css`
    margin:0px 0px 7px 0px;
    padding:0px 0px 0px 5px;
    a {
        display: inline-block;
    }

    #notice-title {
        font-size: 10px;
        width: 100px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    #notice-date {
        padding:0px 0px 0px 7px;
        font-size: 9px;
        max-width: 100px;
    }
`