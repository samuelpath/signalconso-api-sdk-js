import {ReportStatus} from '../report/Report'
import {Index} from '../../helper/Utils'

export interface SimpleStat {
  value: string | number
}

export type Period = 'Day' | 'Month'

export interface CountByDate {
  date: Date
  count: number
}

export type ReportStatusDistribution = {[key in ReportStatus]: number}

export type ReportTagsDistribution = Index<number>

export interface ReportResponseReviews {
  positive: number
  negative: number
}
