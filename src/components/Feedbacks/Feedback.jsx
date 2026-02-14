import { Component } from "react";
import styles from './Feedback.module.css'

export class Feedback extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    increment = (increase) => {
        this.setState((prevState)=> {
            return {[increase]: prevState[increase] + 1}
        })
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (this.state.good == 0) {
            return 0
        }
        return Math.round((this.state.good / total) * 100)
    }

    render() {
        return (
            <div className={styles.container}>
            <h2 className={styles.title}>
                Please leave your feedback
            </h2>

            <div className={styles.buttons}>
                <button
                    onClick={() => this.increment("good")}
                    type="button"
                    className={styles.button}
                >
                    Good
                </button>

                <button
                    onClick={() => this.increment("neutral")}
                    type="button"
                    className={styles.button}
                >
                    Neutral
                </button>

                <button
                    onClick={() => this.increment("bad")}
                    type="button"
                    className={styles.button}
                >
                    Bad
                </button>
            </div>

            <div className={styles.stats}>
            {this.countTotalFeedback() === 0

            ? (<p>There is no feedback</p>)

            : (<><p className={styles.stat}>Good: {this.state.good}</p>
            <p className={styles.stat}>Neutral: {this.state.neutral}</p>
            <p className={styles.stat}>Bad: {this.state.bad}</p>
            <p className={styles.stat}>Total: {this.countTotalFeedback()}</p>
            <p className={styles.stat}>
                Percent of Good: {this.countPositiveFeedbackPercentage()} %
            </p></>)}
                
            </div>
        </div>
        )
    }
}
