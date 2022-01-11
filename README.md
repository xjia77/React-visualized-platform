### Haze Data Analysis Platform

#### step1

```bash
npm i
npm run dev
```

#### step2

open bowser at [http://localhost:8980/](http://localhost:8980/)

#### Data source
http://datacenter.mep.gov.cn

#### Analysis Tools
* ECharts
* Ant-Design

#### Deployment
You can put the `spider` folder on a remote server and create a `crontab` timed task

```bash
> crontab -e
> 00 12 * * * /usr/local/bin/node /dev/spider/index.js 2>&1 # 每天12：00执行
```
